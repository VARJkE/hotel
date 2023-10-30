import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Room } from 'src/app/models/Room';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.css']
})
export class AvailableRoomsComponent {

  availableRooms: Array<Room> = [];
  roomTypes: Array<RoomType> = [];
  bookingData: any = [];
  checkIn: Date = new Date;
  checkOut: Date = new Date;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) {
    
  this.getRoomTypes()
  this.getRooms()
  this.getBookings()
  }


 ngOnInit() {
  
  
  this.route.queryParams.subscribe(params => {
    this.checkIn = params['checkin'];
    this.checkOut = params['checkout'];
  
  })


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
  

  checkRoomAvailability(checkin: Date, checkout: Date): any {
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

  addBooking(roomId: any, roomTypeId: any) {
    this.router.navigate(['rooms/booking'], {
      queryParams: {
        roomid: roomId,
        roomtypeid: roomTypeId,
        checkin: this.checkIn,
        checkout: this.checkOut
      }
    })
  }

}

