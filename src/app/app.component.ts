import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

interface QuoteInterface {
  text: string;
  author: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quote!: any;

  constructor(private qService: QuoteService) { }

  ngOnInit(): void {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.qService.getQuotes().subscribe(data => {
      this.quote = data;
      // this.makeId(this.quotes);
    });
  }

  // makeId(quotes: any) {
  //   let i = 0;
  //   const qq = quotes.map((element: any) => {
  //     element["id"] = ++i;
  //     return element;
  //   });
  //   console.log('THIS IS THE FINAL COUNTDOWN!!! \n' + JSON.stringify(qq));
  // }

}
