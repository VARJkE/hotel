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
 isLoading: boolean = false;

  ngOnInit() {
    this.getRoom();

  }

  getRoom() {
    this.isLoading = true;
    this.dataService.getRoomTypes().subscribe((res: RoomType[]) => {
      this.rooms = res;
      setTimeout( () => {
        this.isLoading = false;
      }, 2000);
      
    });
    
    console.log('loaded', this.isLoading)
  }

  viewRoomDetails(roomId: string) {
    this.router.navigate(['/room/details'], { queryParams: {id: roomId}});
  }
}
