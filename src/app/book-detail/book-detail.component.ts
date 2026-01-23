import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {

  bookId!: string;

  books: any = {
    'unconfessed-love': {
      title: 'Unconfessed Love',
      image: '/assets/BOOK2.png',
      description: `
        Harsh Rao is forced to confront the shadows of his past
        just when he begins to believe in love again.
        A deeply emotional story of healing and sacrifice.
      `,
      buyLink: 'https://www.amazon.in/dp/B0DGCKK2S6'
    },
    'the-day-i-live-for': {
      title: 'The Day I Live For',
      image: '/assets/BOOK1.png',
      description: `
        Aman’s life changes forever on the day of his engagement.
        A romantic mystery filled with love, guilt, and unanswered questions.
      `,
      buyLink: 'https://rzp.io/l/authornikita'
    }
  };

  book: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id')!;
    this.book = this.books[this.bookId];
  }
}
