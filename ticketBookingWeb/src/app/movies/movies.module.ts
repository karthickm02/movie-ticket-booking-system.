import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from '../movies-state/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from '../app-state/app-state.state';


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature("movies", movieReducer),
  ],
})
export class MoviesModule { }
