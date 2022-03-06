import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { theatre } from '../moviesDB';
import { TicketBookingService } from '../service/ticket-booking.service';

@Injectable({
  providedIn: 'root'
})
export class TheatresResolver implements Resolve<theatre[]> {
  constructor (private ticketBooking : TicketBookingService ) {}

  resolve(): Observable<theatre[]>{
    return this.ticketBooking.getTheatres();
  }
}
