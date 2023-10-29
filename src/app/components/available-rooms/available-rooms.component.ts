import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Room } from 'src/app/models/Room';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.css']
})
export class AvailableRoomsComponent {

  availableRooms: Array<Room> = []
  bookingData: any = []

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}


 ngOnInit() {
  this.getRooms()
  this.getBookings()

 } 

getRooms() {
  return this.dataService.getAvailableRooms().subscribe((res) => this.availableRooms = res)
}

getBookings() {
  return this.dataService.getBookingDetails().subscribe((res) => this.bookingData = res)
}
  

  checkRoomAvailability(checkin: string, checkout: string): any {
    for (const room of this.availableRooms) {
      room.isAvailable = true;
    }
    for (const booking of this.bookingData) {
      // if (booking.checkinDate <= checkout && booking.checkoutDate >= checkin) {
        const bookedRoom = this.availableRooms.find((room) => room.id === booking.roomId);
        if (bookedRoom) {
          bookedRoom.isAvailable = false;
        }
        console.log(bookedRoom, 'fdsfdsf')
        console.log(this.availableRooms,'available roomsssss')
        return bookedRoom;
      // }
    }
  }
  onSubmit() {

    this.checkRoomAvailability('2023-10-29','2023-11-02')
  }

}
