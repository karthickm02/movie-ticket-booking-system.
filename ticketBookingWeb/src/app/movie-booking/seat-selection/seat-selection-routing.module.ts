import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatresResolver } from 'src/app/resolver/theatres.resolver';
import { SeatSelectionComponent } from './seat-selection.component';

const routes: Routes = [
  {
    path:"",
    component:SeatSelectionComponent,
    resolve: {theatres: TheatresResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatSelectionRoutingModule { }
