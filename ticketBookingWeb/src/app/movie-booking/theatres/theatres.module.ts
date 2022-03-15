import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheatresRoutingModule } from './theatres-routing.module';
import { TheatresComponent } from './theatres.component';
import { theatreReducer } from 'src/app/movies-state/movies.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [TheatresComponent],
  imports: [
    CommonModule,
    TheatresRoutingModule,
    StoreModule.forFeature("theatres", theatreReducer),
  ]
})
export class TheatresModule { }
