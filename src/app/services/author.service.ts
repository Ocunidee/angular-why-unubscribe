import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Author } from '../models/author';
import { AuthorDetail } from '../models/author-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor() {}

  getList(): Observable<Author[]> {
    return of(JSON.parse(localStorage.getItem('authors'))).pipe(delay(1000));
  }

  getDetail(authorId: string): Observable<AuthorDetail> {
    let authorDetailsJSON = JSON.parse(localStorage.getItem('authorDetails'));
    return of(authorDetailsJSON[Number(authorId)]).pipe(delay(1000));
  }
}
