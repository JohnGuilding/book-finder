import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  faHeart = faHeart;
  books: any[] = [];

  constructor(private http: HttpClient, private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  handleSearch() {
    const searchedWords = this.searchText;
    console.log('working');
    let url = `https://www.googleapis.com/books/v1/volumes?q=inauthor=${searchedWords}`
    return this.http.get(url).toPromise().then((response: GoogleBooksResponse) => {
      console.log(response.items);
      // this.books.push(response.items);
      this.books = response.items.map(book => {
        book = book.volumeInfo;
        return book;
      });
      console.log(this.books);
    });
  }

  handleNavigate() {
    this.router.navigate(['/collection']);
  }

  handleSave(book) {
    this.firestore.collection('books').add(book);
  }
}
