import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  isLoading = false;
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.bookService
      .getList()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(books => {
        this.books = books;
      });
  }
}
