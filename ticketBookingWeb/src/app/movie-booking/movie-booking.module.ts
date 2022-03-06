import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieBookingRoutingModule } from './movie-booking-routing.module';
import { MovieBookingComponent } from './movie-booking.component';


@NgModule({
  declarations: [MovieBookingComponent],
  imports: [
    CommonModule,
    MovieBookingRoutingModule
  ]
})
export class MovieBookingModule { }
