import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route:ActivatedRoute, private service: TicketBookingService) {}

  ngOnInit(): void {
    
    // this.service.getMovies().subscribe(data => this.movieList = data);
    this.movieList = this.route.snapshot.data["movies"];
    this.sliderItems = this.route.snapshot.data["sliders"];
    console.log(this.movieList);
  }
}
