import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Booking } from 'src/app/models/Booking';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  bookingsData!: Booking[];
  bookingsSubscription!: Subscription;
  totalBookings: number = 0;
  monthlyBookings: number = 0;
  weeklyBookings: number = 0;

  constructor (
    private authService: AuthService,
    private dataService: DataService
    ) {

  }

  ngOnInit() {
    this.getBookings()
  }

  getBookings() {
   this.bookingsSubscription = this.dataService.getBookingDetails().subscribe((res: Booking[]) => {
      this.bookingsData = res;
      this.totalBookings = res.length;

      const currentDate = new Date();
      const currentMonthBookings = this.bookingsData.filter((booking) => {
        // const bookingDate = new Date(booking)
      })
    })
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.bookingsSubscription.unsubscribe();
  }

}
