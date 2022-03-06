import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesResolver } from '../resolver/movies.resolver';
import { MovieDetailsComponent } from './movie-details.component';

const routes: Routes = [
  {
    path:"",
    component:MovieDetailsComponent,
    resolve: {movies: MoviesResolver}
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
