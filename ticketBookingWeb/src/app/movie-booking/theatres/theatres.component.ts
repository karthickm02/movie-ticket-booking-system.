import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMovies, getTheatres } from 'src/app/movies-state/movies.selector';
import { theatre, movie } from 'src/app/moviesDB';

@Component({
  selector: 'app-theatre-display',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css'],
})
export class TheatresComponent implements OnInit {
  public movieId:number;
  public movie!: movie;
  public theatres: theatre[] = [];

  constructor(private route: ActivatedRoute, private router: Router,  private store:Store<any>) {
     this.movieId = parseInt(this.route.snapshot.params['id']);
     this.store.select(getMovies).subscribe(data => {
      this.movie = data[this.movieId];
    })
    this.setTheatresForMovie(this.movie);
  } 

  setTheatresForMovie(movie: any) {
    var theaterArray = movie.theatres;
    this.store.select(getTheatres).subscribe ( data => {

      for (let index = 0; index < theaterArray.length; index++) {
        this.theatres.push(data[(theaterArray[index])]!);
      }
    })
   // var theatres =  this.route.snapshot.data["theatres"];
  }

  showSeats(theatreId: any, showTimeIndex :any) {
    this.router.navigate(['seat-selection/' + theatreId + "/" + showTimeIndex], { relativeTo: this.route });
  }
  ngOnInit(): void {

  }
}
