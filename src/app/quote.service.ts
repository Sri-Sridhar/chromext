import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    //max available quotes are 1643
    const random = Math.floor(Math.random() * (1643 - 1) + 1);
    return this.http.get<any>('http://localhost:3000/quotes/' + random);
  }

}
