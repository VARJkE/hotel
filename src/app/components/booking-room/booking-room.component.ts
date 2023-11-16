import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/Booking';
import { DataService } from 'src/app/service/data.service';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  checkIn: Date = new Date;
  checkOut: Date = new Date;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private _snackBar: MatSnackBar
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

      this.galleryOptions = [
        {
          width: '500px',
          height: '450px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 500,
          preview: false
        }
      ];
  
      this.galleryImages = [
        {
          small: 'assets/img/' + this.roomTypeId + '/1.jpg',
          medium: 'assets/img/' + this.roomTypeId + '/1.jpg',
          big: 'assets/img/' + this.roomTypeId + '/1.jpg'
        },
        {
          small: 'assets/img/' + this.roomTypeId + '/2.jpg',
          medium: 'assets/img/' + this.roomTypeId + '/2.jpg',
          big: 'assets/img/' + this.roomTypeId + '/2.jpg'
        },
        {
          small: 'assets/img/' + this.roomTypeId + '/3.jpg',
          medium: 'assets/img/' + this.roomTypeId + '/3.jpg',
          big: 'assets/img/' + this.roomTypeId + '/3.jpg'
        },{
          small: 'assets/img/' + this.roomTypeId + '/4.jpg',
          medium: 'assets/img/' + this.roomTypeId + '/4.jpg',
          big: 'assets/img/' + this.roomTypeId + '/4.jpg'
        }
      ];
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
        guestsNumber: ['1'],
        addDateTime: [new Date()]
      }) 
  }

  addBookingData() {
    let bookingData: Booking;
    bookingData = this.bookingForm.value;
    this.dataService.postBookingData(bookingData).subscribe();
    console.log(bookingData)
    this.bookingForm.reset();
    this.openSnackBar('Success! Your booking has been submitted.', 'Close');
    this.router.navigate(['/main']);

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000, // Duration the snackbar is displayed in milliseconds
      panelClass: ['snackbar-success'] // Custom CSS class for styling
    });
  }

}
