import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  } from './movies-state/movies.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private store:Store<any>) {
  }
  title = 'ticketBookingWeb';
  ngOnInit(): void {
  }
  
}
