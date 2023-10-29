import { Component } from '@angular/core';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  constructor(
    private dataService: DataService, 
    private router: Router) {
  }

 rooms: RoomType[] = []; 

  ngOnInit() {
    this.getRoom();

  }

  getRoom() {
    this.dataService.getRoomTypes().subscribe((res: RoomType[]) => this.rooms = res)
  }

  viewRoomDetails(roomId: string) {
    this.router.navigate(['/room/details'], { queryParams: {id: roomId}});
  }
}
