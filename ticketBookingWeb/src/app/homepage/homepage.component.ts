import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state/app-state.state';
import {  } from '../movies-state/movies.action';
import { getMovies } from '../movies-state/movies.selector';
import { moviesState } from '../movies-state/movies.state';
import { movie, slider } from '../moviesDB';
import { TicketBookingService } from '../service/ticket-booking.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public movieList: movie[] = [];
  public sliderItems: slider[] = [];

  constructor(private route:ActivatedRoute,private store:Store<moviesState>) {
    
  }

  ngOnInit(): void {

    this.store.select(getMovies).subscribe(data => {
      this.movieList = data;
    })
   // this.store.dispatch(loadMovies());
    
    // this.service.getMovies().subscribe(data => this.movieList = data);
    // this.movieList = this.route.snapshot.data["movies"];
    this.sliderItems = this.route.snapshot.data["sliders"];
    // console.log(this.movieList);
  }
}
