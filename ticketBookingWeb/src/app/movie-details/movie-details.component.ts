import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMovies } from '../movies-state/movies.selector';
import { movie } from '../moviesDB';


@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie!: movie;

  constructor(private route:ActivatedRoute, private store:Store<any>) {  
   }

  ngOnInit(): void {
    var temp = parseInt(this.route.snapshot.params['id']);
    this.store.select(getMovies).subscribe(data => {
      this.movie = data[temp];
    }) 
    // this.movie = this.route.snapshot.data['movies'][temp];
  }
}
