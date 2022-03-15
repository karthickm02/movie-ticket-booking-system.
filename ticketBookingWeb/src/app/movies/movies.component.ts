import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMovies } from '../movies-state/movies.selector';
import { movie } from '../moviesDB';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public movieList: movie[] = [];
  
  constructor(private route:ActivatedRoute, private store:Store<any>) {}

  ngOnInit(): void {
    this.store.select(getMovies).subscribe(data => {
      this.movieList = data;
    })
  }
}
