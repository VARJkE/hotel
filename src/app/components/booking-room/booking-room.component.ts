import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/Booking';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-booking-room',
  templateUrl: './booking-room.component.html',
  styleUrls: ['./booking-room.component.css']
})
export class BookingRoomComponent {

  bookingForm!: FormGroup;
  minDate: string = '';
  roomId: number = 0;
  roomTypeId: number = 0;
  bookingId: number = 0;

  checkIn: Date = new Date;
  checkOut: Date = new Date;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) {

  }


  ngOnInit() {

    // this.route.queryParams.subscribe((params) => {
    //   this.roomId = params['roomid'];
    //   this.roomTypeId = params['roomtypeid'];
    //   this.bookingId = params['bookingid'];
    //   this.checkIn = params['checkin'];
    //   this.checkOut = params['checkout'];
    // }
    //   )  
      this.bookingId = this.dataService.bookingDetails.id;
      this.roomId = this.dataService.bookingDetails.roomId;
      this.roomTypeId = this.dataService.bookingDetails.roomTypeId;
      this.checkIn = this.dataService.bookingDetails.checkInDate;
      this.checkOut = this.dataService.bookingDetails.checkOutDate;
      this.buildBookingForm();
  }

  buildBookingForm() {
    this.bookingForm = this.formBuilder.group(
      {
        id: [this.bookingId],
        guestFullName: ['', [Validators.required]],
        guestEmail: ['', [Validators.required, Validators.email]],
        guestPhoneNumber: [''],
        roomId: [this.roomId],
        roomTypeId: [this.roomTypeId],
        checkInDate: [this.checkIn],
        checkOutDate: [this.checkOut],
        guestsNumber: ['1']
      }) 
  }

  addBookingData() {
    let bookingData: Booking;
    bookingData = this.bookingForm.value;
    this.dataService.postBookingData(bookingData).subscribe();
    console.log(bookingData)
    this.bookingForm.reset();
    alert("Successfully!");
    this.router.navigate(['/main']);

  }



}
