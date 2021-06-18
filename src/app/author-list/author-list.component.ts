import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];
  isLoading = false;

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.fetchAuthors();
  }

  fetchAuthors(): void {
    this.isLoading = true;
    this.authorService
      .getList()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(list => {
        this.authors = list;
      });
  }
}
