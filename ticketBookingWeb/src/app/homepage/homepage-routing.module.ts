import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesResolver } from '../resolver/movies.resolver';
import { SliderItemsResolver } from '../resolver/slider-items.resolver';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    resolve : { movies: MoviesResolver, sliders: SliderItemsResolver}, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
