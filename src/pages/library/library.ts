import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quoteData from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  ngOnInit() {
    this.quoteCollection = quoteData;
  }
}
