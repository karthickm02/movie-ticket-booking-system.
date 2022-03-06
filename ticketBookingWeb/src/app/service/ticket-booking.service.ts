import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { movie, slider, theatre } from '../moviesDB';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http: HttpClient) { }

  getMovies() : Observable<movie[]>{
    return this.http.get<movie[]>("assets/data/movies-data.json");
  }

  getTheatres() : Observable<theatre[]>{
    return this.http.get<theatre[]>("assets/data/theatres-data.json");
  }

  getSliderItems() : Observable<slider[]> {
    return this.http.get<slider[]>("assets/data/slider-data.json");
  }

}
