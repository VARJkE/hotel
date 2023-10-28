import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Room } from 'src/app/models/Room';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  constructor(private httpClient: HttpClient, private dataService: DataService) {
  }

 rooms: RoomType[] = []; 

  ngOnInit() {
    this.getRoom();

  }

  getRoom() {
    this.dataService.getRoomTypes().subscribe((res: RoomType[]) => this.rooms = res)
  }

}
