import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { movie, theatre } from '../moviesDB';
import { TicketBookingService } from '../service/ticket-booking.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<movie[]> {

  public movies: movie[] = [];
  constructor (private ticketBooking : TicketBookingService ) {}

  resolve(): Observable<movie[]> {
    // var movies;


    return this.ticketBooking.getMovies();

  }
}


