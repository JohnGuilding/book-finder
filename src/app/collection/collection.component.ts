import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  books: any[] = [];

  constructor(private http: HttpClient, private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('books').get().toPromise()
    .then((response) => {
      const data = response.docs.map(d => d.data())
      this.books = data;
      console.log(this.books);
    });
  }

  handleNavigate() {
    this.router.navigate(['/']);
  }

}
