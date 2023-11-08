import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Booking } from 'src/app/models/Booking';
import { Room } from 'src/app/models/Room';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.css'],
  
})
export class AvailableRoomsComponent {
  
  filterForm!: FormGroup;
  originalAvailableRooms: Array<Room> = [];
  availableRooms: Array<Room> = [];
  roomTypes: Array<RoomType> = [];
  selectedRoomTypeId: Array<number> = [];

  selectedRoomTypeIdSubject = new BehaviorSubject<Array<number>>([0]);

  
  bookingData: any = [];
  checkIn: Date = new Date;
  checkOut: Date = new Date;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.getRoomTypes()
    this.getBookings()
    // this.getRooms()
    // this.dataService.getRooms();
    
  }


  ngOnInit() {
    // this.buildFilterForm();
    this.route.queryParams.subscribe(params => {
      this.checkIn = params['checkin'];
      this.checkOut = params['checkout'];

    });
    this.getRooms();

    this.selectedRoomTypeIdSubject.subscribe(selectedRoomTypeId => {
        this.availableRooms = this.originalAvailableRooms.filter(room => selectedRoomTypeId.includes(room.roomType));
    });

  }

  // buildFilterForm() {
  //   this.filterForm = this.formBuilder.group(
  //     {
  //       roomType: ['0']
  //     }
  //   );
  // }

  getRooms() {
    return this.dataService.getAvailableRooms().subscribe((data) => {
      this.originalAvailableRooms = data;
      this.availableRooms = data;
    });
  }

  getBookings() {
    return this.dataService.getBookingDetails().subscribe((res) => this.bookingData = res)
  }

  getRoomTypes() {
    this.dataService.getRoomTypes().subscribe((res: RoomType[]) => this.roomTypes = res)
  }


  checkRoomAvailability(checkin: Date, checkout: Date) {
    for (let room of this.availableRooms) {
      room.isAvailable = true;
    }
    for (let booking of this.bookingData) {
      
      if (booking.checkInDate <= checkout && booking.checkOutDate >= checkin) {
        const bookedRoom = this.availableRooms.find((room) => room.id === booking.roomId);
        if (bookedRoom) {
          bookedRoom.isAvailable = false;
        }
        
      }
    }
  }

  // filterRoom() {
  //   this.dataService.getRooms();
  //   const roomTypeId: number = Number(this.filterForm.get('roomType')?.value);
  //   if (roomTypeId === 0) {
  //     this.getRooms();
  //   }
  //   this.dataService.filterRooms(roomTypeId);
  //   this.availableRooms = this.dataService.rooms
  // }

  addBooking(roomId: any, roomTypeId: any) {
    // this.router.navigate(['rooms/booking'], {
    //   queryParams: {
    //     roomid: roomId,
    //     roomtypeid: roomTypeId,
    //     bookingid: this.bookingData.length + 1,
    //     checkin: this.checkIn,
    //     checkout: this.checkOut
    //   }
    // })
    this.dataService.bookingDetails = new Booking(this.bookingData.length + 1, roomId, roomTypeId, this.checkIn, this.checkOut, '', '', 0, 0)
    this.router.navigate(['rooms/booking']);
    console.log(this.dataService.bookingDetails)
  }

  onRoomTypeChange(selectedRoomTypeId: Array<number>) {
    const roomTypeId: Array<number> = selectedRoomTypeId
    this.selectedRoomTypeIdSubject.next(roomTypeId);
  }

}
