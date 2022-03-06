import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesResolver } from 'src/app/resolver/movies.resolver';
import { TheatresResolver } from 'src/app/resolver/theatres.resolver';
import { TheatresComponent } from './theatres.component';

const routes: Routes = [
  {
    path: "",
    component:TheatresComponent,
    resolve: {movies:MoviesResolver ,theatres: TheatresResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatresRoutingModule { }
