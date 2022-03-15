import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { movie, slider, theatre } from '../moviesDB';
import { map, Observable } from 'rxjs';
import { AppState } from '../app-state/app-state.state';
import { Store } from '@ngrx/store';
import {  } from '../movies-state/movies.action';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http: HttpClient, private store:Store<AppState>) {
   }

  getMovies() : Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/movies-data.json").pipe(
      map((data) => {
        const movies: movie[] = data;
        // for (let key in data) {
        //   movies.push({ ...data[key]});
        // }
        return movies;
      })
    );
  }

  getTheatres() : Observable<theatre[]>{
    return this.http.get<theatre[]>("assets/data/theatres-data.json");
  }

  getSliderItems() : Observable<slider[]> {
    return this.http.get<slider[]>("assets/data/slider-data.json");
  }

}
