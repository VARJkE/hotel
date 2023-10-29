import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-room',
  templateUrl: './booking-room.component.html',
  styleUrls: ['./booking-room.component.css']
})
export class BookingRoomComponent {

  bookingForm!: FormGroup;
  minDate: string = '';

  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.buildBookingForm();
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  buildBookingForm() {
    this.bookingForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        roomType: [''],
        checkInDate: [''],
        checkOutDate: [''],
        guestsNumber: ['1']

      }) 
  }

  onSubmit() {
    console.log(this.bookingForm.value)
  }



}
