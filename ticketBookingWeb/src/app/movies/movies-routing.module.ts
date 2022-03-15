import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {  } from '../movies-state/movies.reducer';
import { MoviesResolver } from '../resolver/movies.resolver';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: "",
    component:MoviesComponent,
    resolve: {movies: MoviesResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
