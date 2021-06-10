import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { bookDetails } from '../data/book-details';
import { BookDetail } from '../models/book-detail';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  details: BookDetail | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.details = bookDetails.get(Number(id));
    interval(1000).subscribe(counter => {
      console.log(counter);
    });
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
  }
}
