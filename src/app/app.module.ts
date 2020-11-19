import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'collection', component: CollectionComponent}
];

const firebaseConfig = {
  apiKey: "AIzaSyChr6JqaZiB0wAMPMCwU_fhjpM96RQIviI",
  authDomain: "bookfinder-eea6e.firebaseapp.com",
  databaseURL: "https://bookfinder-eea6e.firebaseio.com",
  projectId: "bookfinder-eea6e",
  storageBucket: "bookfinder-eea6e.appspot.com",
  messagingSenderId: "200005568528",
  appId: "1:200005568528:web:1e884e258cdce141f0e295"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CollectionComponent
  ],
  imports: [
    // npm install @angular/fire
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
