import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getTheatres } from 'src/app/movies-state/movies.selector';
import { theatre } from 'src/app/moviesDB';

@Component({
  selector: 'app-seat-seletion',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css'],
})
export class SeatSelectionComponent implements OnInit {
  public theatre!: theatre;
  public seatRow = new Map();
  public selectedSeats = new Map();
  public total: number = 0.0;
  public showTime: string = '';
  seatRowNames: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
              'O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor(private route: ActivatedRoute, private store:Store<any>) {
    var theatreId = parseInt(this.route.snapshot.params['theatreId']);
    this.store.select(getTheatres).subscribe ( data => {
      this.theatre = data[theatreId]!;
    })
    var showTimeIndex = parseInt(this.route.snapshot.params['showTimeIndex']);
    this.showTime = this.theatre.showTimes[showTimeIndex];
  }

  seatSelection(clickedItem: number, item: string) {
    let temp = this.seatRow.get(item);
    temp[clickedItem].state = !temp[clickedItem].state;

    if (temp[clickedItem].state) {
      this.selectedSeats.set(temp[clickedItem].seat, temp[clickedItem]);
    } else {
      this.selectedSeats.delete(temp[clickedItem].seat);
    }
    this.total = this.selectedSeats.size * 200;
  }

  ngOnInit(): void {
    for (let i = 0; i < this.theatre.row; i++) {
      let temp = [];
      for (let j = 0; j < this.theatre.column; j++) {
        temp.push({ seat: this.seatRowNames[i] + '' + j, state: false });
      }
      this.seatRow.set(this.seatRowNames[i], temp);
    }
  }
}
