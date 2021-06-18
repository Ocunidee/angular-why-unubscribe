import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { authorDetails } from '../data/author-details';
import { authors } from '../data/author-list';
import { bookDetails } from '../data/book-details';
import { books } from '../data/book-list';
import { Book } from '../models/book';
import { BookAddition } from '../models/book-addition';
import { BookDetail } from '../models/book-detail';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getList(): Observable<Book[]> {
    return of(books).pipe(delay(1000));
  }

  getDetail(bookId: string): Observable<BookDetail> {
    return of(bookDetails.get(Number(bookId))).pipe(delay(1000));
  }

  add(book: BookAddition): Observable<void> {
    
    setTimeout(() => {
      const bookId = books.length + 1;
      let author = authors.find(a => {
        return a.name == book.author;
      });
      let authorDetail = authorDetails.get(author.id);
      if (!author) {
        const authorId = authors.length + 1;
        author = { id: authorId, name: book.author };
        authors.push(author);
      }

      const newBookDetail = { id: bookId, ...book, author: author };
      const newBook = { id: bookId, title: book.title, author: book.author };
      bookDetails.set(bookId, newBookDetail);
      books.push(newBook);

      if (!authorDetail) {
        authorDetails.set(author.id, {
          ...author,
          nationality: 'TBD',
          birthYear: 'TBD',
          books: [newBook]
        });
      }
      authorDetail.books = [...authorDetail.books, newBook];
    }, 1500);

    return of(void 0).pipe(delay(1500));
  }
}
