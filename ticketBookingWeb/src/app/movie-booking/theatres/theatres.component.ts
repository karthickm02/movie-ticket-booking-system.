import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { theatre, movie } from 'src/app/moviesDB';

@Component({
  selector: 'app-theatre-display',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css'],
})
export class TheatresComponent implements OnInit {
  public movieId:number;
  public movie: movie;
  public theatres: theatre[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
     this.movieId = parseInt(this.route.snapshot.params['id']);
    this.movie = this.route.snapshot.data['movies'][this.movieId];
    this.setTheatresForMovie(this.movie);
  } 

  setTheatresForMovie(movie: any) {
    var theaterArray = movie.theatres;
    var theatres =  this.route.snapshot.data["theatres"];
    for (let index = 0; index < theaterArray.length; index++) {
      this.theatres.push(theatres[(theaterArray[index])]!);
    }
  }

  showSeats(theatreId: any, showTimeIndex :any) {
    this.router.navigate(['seat-selection/' + theatreId + "/" + showTimeIndex], { relativeTo: this.route });
  }
  ngOnInit(): void {

  }
}
