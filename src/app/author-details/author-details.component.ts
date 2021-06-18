import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthorDetail } from '../models/author-detail';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  details: AuthorDetail | null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.fetchAuthorDetail();
  }

  fetchAuthorDetail(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.authorService
      .getDetail(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(details => {
        this.details = details;
      });
  }
}
