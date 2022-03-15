import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatSelectionRoutingModule } from './seat-selection-routing.module';
import { SeatSelectionComponent } from './seat-selection.component';
import { theatreReducer } from 'src/app/movies-state/movies.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [SeatSelectionComponent],
  imports: [
    CommonModule,
    SeatSelectionRoutingModule,
    StoreModule.forFeature("theatres", theatreReducer),

  ]
})
export class SeatSelectionModule { }
