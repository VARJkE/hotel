import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private dataService: DataService
  ) {

  }


  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.roomId = params['roomid'];
      this.roomTypeId = params['roomtypeid'];
      this.bookingId = params['bookingid'];
      this.checkIn = params['checkin'];
      this.checkOut = params['checkout'];
    }
      )

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
        checkInDate: [this.checkIn],
        checkOutDate: [this.checkOut],
        guestsNumber: ['1']
      }) 
  }

  addBookingData() {
    this.dataService.postBookingData(this.bookingForm.value).subscribe(res => console.log(res))
    this.bookingForm.reset()
  }



}
