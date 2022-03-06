import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../moviesDB';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css'],
})
export class MovieBookingComponent implements OnInit {
  public movieId: number;
  public movie: movie;
  public premiereDate: {date:Date, dateActive:string}[] = [];

  setPremiereDate() {
    this.premiereDate.push({ date: new Date(), dateActive: 'date-active' });
    for (let index = 1; index < 6; index++) {
      let date = new Date();
      let nextDate = new Date(date.setDate(date.getDate() + index));
      this.premiereDate.push({ date: nextDate, dateActive: 'date' });
    }
  }

  dateActivation(clickedItem: number) {
    for (let date of this.premiereDate) {
      if (date == this.premiereDate[clickedItem]) {
        date.dateActive = 'date-active';
      } else {
        date.dateActive = 'date';
      }
    }
  }

  constructor(private route: ActivatedRoute) {
    var temp = parseInt(this.route.snapshot.params['id']);
    this.movie = this.route.snapshot.data['movies'][temp];
    this.movieId = this.movie.id;
    this.setPremiereDate();
  }

  ngOnInit(): void {
    
  }
}
