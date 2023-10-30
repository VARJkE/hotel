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
  today = new Date();
  checkIn: Date = new Date;
  checkOut: Date = new Date;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {

  }


  ngOnInit() {

    this.minDate = this.today.toISOString().split('T')[0];
    this.route.queryParams.subscribe((params) => {
      this.roomId = params['roomid'];
      this.roomTypeId = params['roomtypeid']
      this.checkIn = params['checkin'];
      this.checkOut = params['checkout']
      
    }
      )

      this.buildBookingForm();
      console.log(this.roomId, this.checkIn, this.checkOut, this.roomTypeId)
  }

  buildBookingForm() {
    this.bookingForm = this.formBuilder.group(
      {
        id: [4],
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        roomType: [this.roomTypeId],
        checkInDate: [ {value: this.checkIn} ],
        checkOutDate: [ {value: this.checkOut} ],
        guestsNumber: ['1']

      }) 
  }

  addBookingData() {
    this.dataService.postBookingData(this.bookingForm.value).subscribe(res => console.log(res))
    console.log(this.bookingForm.value)
  }



}
