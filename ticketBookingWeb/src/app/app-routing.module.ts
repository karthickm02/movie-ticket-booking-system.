import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },

  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'movie-details/:id',
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      )
  },
  {
    path: 'theater-selection/:id',
    loadChildren: () => 
    import('./movie-booking/movie-booking.module').then(
      (m) => m.MovieBookingModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
