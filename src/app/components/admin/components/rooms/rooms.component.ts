import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Room } from 'src/app/models/Room';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {

  availableRooms: Room[] = [];
  roomTypes: RoomType[] = [];
  availableRoomsSubscription!: Subscription;
  roomTypesSubscription!: Subscription;

  constructor(
    private dataService: DataService
  ) {}


  ngOnInit() {
    this.getRooms();
    this.getRoomTypes();
  }

  getRooms() {
    this.availableRoomsSubscription = this.dataService.getAvailableRooms().subscribe((res) => {
      this.availableRooms = res;
    })
  }

  getRoomTypes() {
    this.roomTypesSubscription = this.dataService.getRoomTypes().subscribe((res) => {
      this.roomTypes = res;
    })
  }

  ngOnDestroy(): void {
    this.availableRoomsSubscription.unsubscribe();
    this.roomTypesSubscription.unsubscribe();
  }

}
