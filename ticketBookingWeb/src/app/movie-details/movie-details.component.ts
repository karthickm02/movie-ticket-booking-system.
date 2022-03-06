import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../moviesDB';


@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie!: movie;

  constructor(private route:ActivatedRoute) {  
   }

  ngOnInit(): void {
    var temp = parseInt(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.data['movies']);
    this.movie = this.route.snapshot.data['movies'][temp];
  }
}
