import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { slider } from '../moviesDB';
import { TicketBookingService } from '../service/ticket-booking.service';

@Injectable({
  providedIn: 'root'
})
export class SliderItemsResolver implements Resolve<slider[]> {
  constructor (private ticketBooking : TicketBookingService ) {}
  resolve(): Observable<slider[]>  {
    return this.ticketBooking.getSliderItems();
  }
}
