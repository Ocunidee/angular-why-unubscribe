import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { authorDetails } from '../data/author-details';
import { authors } from '../data/author-list';
import { Author } from '../models/author';
import { AuthorDetail } from '../models/author-detail';

@Injectable()
export class AuthorService {
  constructor() {}

  getList(): Observable<Author[]> {
    return of(authors).pipe(delay(1000));
  }

  getDetail(authorId: string): Observable<AuthorDetail> {
    return of(authorDetails.get(Number(authorId))).pipe(delay(1000));
  }
}
