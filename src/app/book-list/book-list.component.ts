import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Author } from '../models/author';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  authors: Author[];
  isLoading = false;
  bookForm: FormGroup;
  showBookForm = false;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      parutionYear: ['', Validators.required],
      pageNumber: ['', Validators.required],
      editor: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.isLoading = true;
    this.bookService
      .getList()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(books => {
        this.books = books;
      });
  }

  addBook(): void {
    this.bookService.add(this.bookForm.value).subscribe(_ => {
      this.showBookForm = false;
    });
  }

  showForm(): void {
    this.showBookForm = true;
  }
}
