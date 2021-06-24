import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Book } from '../models/book';
import { BookAddition } from '../models/book-addition';
import { BookDetail } from '../models/book-detail';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getList(): Observable<Book[]> {
    return of(JSON.parse(localStorage.getItem('books'))).pipe(delay(1000));
  }

  getDetail(bookId: string): Observable<BookDetail> {
    return of(
      JSON.parse(localStorage.getItem('bookDetails'))[Number(bookId)]
    ).pipe(delay(1000));
  }

  add(book: BookAddition): Observable<void> {
    let books = JSON.parse(localStorage.getItem('books'));
    let authors = JSON.parse(localStorage.getItem('authors'));
    let authorDetails = JSON.parse(localStorage.getItem('authorDetails'));
    let bookDetails = JSON.parse(localStorage.getItem('bookDetails'));

    const bookId = books.length;

    let author = authors.find(a => {
      return a.name == book.author;
    });
    if (!author) {
      author = { id: authors.length, name: book.author };
      authors.push(author);
    }

    const newBookDetail = { id: bookId, ...book, author: author };
    const newBook = { id: bookId, title: book.title, author: book.author };
    bookDetails.push(newBookDetail);
    books.push(newBook);

    let authorDetail = authorDetails[author.id];
    if (!authorDetail) {
      authorDetails.push({
        ...author,
        nationality: 'TBD',
        birthYear: 'TBD',
        books: [newBook]
      });
    } else {
      authorDetails[author.id].books = [...authorDetail.books, newBook];
    }

    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('authorDetails', JSON.stringify(authorDetails));
    localStorage.setItem('bookDetails', JSON.stringify(bookDetails));

    return of(void 0).pipe(delay(1500));
  }
}
