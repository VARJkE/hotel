import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  rooms!: Observable<RoomType[]>

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.rooms = this.dataService.getRoomTypes();
  }

}
