import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { movies } from '../movies-state/movies.action';
import { movie, theatre } from '../moviesDB';
import { TicketBookingService } from '../service/ticket-booking.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolver implements Resolve<any> {
  public movies: movie[] = [];
  constructor(
    private ticketBooking: TicketBookingService,
    private store: Store<any>
  ) {}

  resolve() {

    return this.ticketBooking.getMovies(). pipe(
      map((result: movie[]) => {
        this.store.dispatch(movies({moviesList:result}));
      })
    );
  }
}
