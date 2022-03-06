import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheatresRoutingModule } from './theatres-routing.module';
import { TheatresComponent } from './theatres.component';


@NgModule({
  declarations: [TheatresComponent],
  imports: [
    CommonModule,
    TheatresRoutingModule
  ]
})
export class TheatresModule { }
