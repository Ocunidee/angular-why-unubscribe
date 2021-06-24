import { Component, OnInit } from '@angular/core';
import { authorDetails } from './data/author-details';
import { authors } from './data/author-list';
import { bookDetails } from './data/book-details';
import { books } from './data/book-list';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('authorDetails', JSON.stringify(authorDetails));
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('bookDetails', JSON.stringify(bookDetails));
  }
}
