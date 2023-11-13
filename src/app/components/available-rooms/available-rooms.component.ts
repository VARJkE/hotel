import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Booking } from 'src/app/models/Booking';
import { Rate } from 'src/app/models/Rate';
import { Room } from 'src/app/models/Room';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

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
  ratesNbg: Rate[] = [];
  selectedCurrency: string = 'GEL'

  selectedRoomTypeIdSubject = new BehaviorSubject<Array<number>>([]);

  
  bookingData: Booking[] = [];
  checkIn: Date = new Date;
  checkOut: Date = new Date;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) 
  {

    this.getRoomTypes()
    this.getBookings()

  }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.checkIn = params['checkin'];
      this.checkOut = params['checkout'];
    });

    this.getRooms();
    this.getRate();

    this.selectedRoomTypeIdSubject.subscribe(selectedRoomTypeId => {
        this.checkRoomAvailability(this.checkIn, this.checkOut);
        this.availableRooms = this.originalAvailableRooms.filter(room => selectedRoomTypeId.includes(room.roomType));
    });

  }

  getRooms() {
    return this.dataService.getAvailableRooms().subscribe((data) => {
      this.originalAvailableRooms = data;
      this.availableRooms = data;
      this.checkRoomAvailability(this.checkIn, this.checkOut)
    });
  }

  getBookings() {
    return this.dataService.getBookingDetails().subscribe((res: Booking[]) => this.bookingData = res)
  }

  getRoomTypes() {
    this.dataService.getRoomTypes().subscribe((res: RoomType[]) => this.roomTypes = res)
  }

  getRate() {
    return this.dataService.getRateFromNbg().subscribe((rate: Rate[]) => this.ratesNbg = rate);
    
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
    this.dataService.bookingDetails = new Booking(this.bookingData.length + 1, roomId, roomTypeId, this.checkIn, this.checkOut, '', '', 0, 0, new Date())
    this.router.navigate(['rooms/booking']);
  }

  onRoomTypeChange(selectedRoomTypeId: Array<number>) {
    const roomTypeId: Array<number> = selectedRoomTypeId
    this.selectedRoomTypeIdSubject.next(roomTypeId);
  }

}
