import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { bookDetails } from '../data/book-details';
import { books } from '../data/book-list';
import { Book } from '../models/book';
import { BookDetail } from '../models/book-detail';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}

  getList(): Observable<Book[]> {
    return of(books).pipe(delay(1000));
  }

  getDetail(bookId: string): Observable<BookDetail> {
    return of(bookDetails.get(Number(bookId))).pipe(delay(1000));
  }

  add(book: any): Observable<void> {
    const id = books.length + 1;
    const newBook = { id: id, ...book };
    books.push(newBook);

    return of(void 0).pipe(delay(1000));
  }
}
