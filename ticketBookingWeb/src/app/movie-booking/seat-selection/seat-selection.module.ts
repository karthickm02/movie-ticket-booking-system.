import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatSelectionRoutingModule } from './seat-selection-routing.module';
import { SeatSelectionComponent } from './seat-selection.component';


@NgModule({
  declarations: [SeatSelectionComponent],
  imports: [
    CommonModule,
    SeatSelectionRoutingModule
  ]
})
export class SeatSelectionModule { }
