import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieBookingRoutingModule } from './movie-booking-routing.module';
import { MovieBookingComponent } from './movie-booking.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from '../movies-state/movies.reducer';


@NgModule({
  declarations: [MovieBookingComponent],
  imports: [
    CommonModule,
    MovieBookingRoutingModule,
    StoreModule.forFeature("movies", movieReducer),
  ]
})
export class MovieBookingModule { }
