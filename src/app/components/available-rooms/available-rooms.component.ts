import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Booking } from 'src/app/models/Booking';
import { Room } from 'src/app/models/Room';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.css']
})
export class AvailableRoomsComponent {
  
  filterForm!: FormGroup;
  availableRooms: Array<Room> = [];
  roomTypes: Array<RoomType> = [];

  
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
    this.getRooms()
    this.dataService.getRooms();
    
  }


  ngOnInit() {
    this.buildFilterForm();
    this.route.queryParams.subscribe(params => {
      this.checkIn = params['checkin'];
      this.checkOut = params['checkout'];

    });

  }

  buildFilterForm() {
    this.filterForm = this.formBuilder.group(
      {
        roomType: ['0']
      }
    );
    
      
      
  }

  getRooms() {
    return this.dataService.getAvailableRooms().subscribe((res) => this.availableRooms = res)
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

  filterRoom() {
    this.dataService.getRooms();
    const roomTypeId: number = Number(this.filterForm.get('roomType')?.value);
    if (roomTypeId === 0) {
      this.getRooms();
    }
    this.dataService.filterRooms(roomTypeId);
    this.availableRooms = this.dataService.rooms
  }

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

}
