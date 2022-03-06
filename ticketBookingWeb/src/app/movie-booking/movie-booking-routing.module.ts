import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesResolver } from '../resolver/movies.resolver';
import { MovieBookingComponent } from './movie-booking.component';

const routes: Routes = [
  {
    path:"",
    component:MovieBookingComponent,
    resolve: { movies : MoviesResolver},
    loadChildren: () => 
    import('./theatres/theatres.module').then(
      (m) => m.TheatresModule
    )
  },

  {
    path:"seat-selection/:theatreId/:showTimeIndex",
   component:MovieBookingComponent,
   resolve: { movies : MoviesResolver},
    loadChildren: () => 
    import('./seat-selection/seat-selection.module').then(
      (m) => m.SeatSelectionModule
    )
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieBookingRoutingModule { }
