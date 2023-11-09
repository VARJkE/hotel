import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/Booking';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  bookingsData!: Observable<Booking[]>;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.bookingsData = this.dataService.getBookingDetails();
    
  }

}
