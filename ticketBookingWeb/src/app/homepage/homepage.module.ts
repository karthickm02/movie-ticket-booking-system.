import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../app-state/app-state.state';
import { movieReducer } from '../movies-state/movies.reducer';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    StoreModule.forFeature("movies", movieReducer),
  ]
})
export class HomepageModule { }
