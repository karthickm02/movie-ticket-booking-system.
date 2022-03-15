import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { theatres } from '../movies-state/movies.action';
import { theatre } from '../moviesDB';
import { TicketBookingService } from '../service/ticket-booking.service';

@Injectable({
  providedIn: 'root'
})
export class TheatresResolver implements Resolve<any> {
  constructor (private ticketBooking : TicketBookingService, private store: Store<any> ) {}

  resolve(): any{
    return this.ticketBooking.getTheatres(). pipe(
      map((result: theatre[]) => {
        this.store.dispatch(theatres({theatresList:result}));
      })
    );
  }
}
 