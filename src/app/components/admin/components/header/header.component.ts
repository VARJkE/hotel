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
  dailyBookings: number = 0;

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
        const bookingDate = new Date(booking.addDateTime);
        return currentDate.getMonth() === bookingDate.getMonth() && currentDate.getFullYear() === bookingDate.getFullYear();
      })

      const currentWeekBookings = this.bookingsData.filter((booking) => {
        const bookingDate = new Date(booking.addDateTime);
        const currentWeek = this.getWeekNumber(currentDate);
        const bookingWeek = this.getWeekNumber(bookingDate);
        return currentWeek === bookingWeek && bookingDate.getFullYear() === currentDate.getFullYear();
      });
      
      this.weeklyBookings = currentWeekBookings.length;

      const currentDayBookings = this.bookingsData.filter((booking) => {
        const bookingDate = new Date(booking.addDateTime);
        return currentDate.getDate() === bookingDate.getDate() && currentDate.getMonth() === bookingDate.getMonth() && currentDate.getFullYear() === bookingDate.getFullYear()
      })

      this.monthlyBookings = currentMonthBookings.length;
      this.dailyBookings = currentDayBookings.length;

    })
  }

  getWeekNumber(date: Date): number {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    return Math.ceil((((date.getTime() - onejan.getTime()) / millisecsInDay) + onejan.getDay() + 1) / 7);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.bookingsSubscription.unsubscribe();
  }

}
