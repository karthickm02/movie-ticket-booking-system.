import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../moviesDB';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public movieList: movie[] = [];
  
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.movieList = this.route.snapshot.data["movies"];
  }
}
