import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {

  room!: RoomType;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap((params: any) => {
    //     const roomId: number = params.get('id');
    //     console.log(params.get('roomId'), params['roomId'])
    //     return this.dataService.getRoomDetails(roomId);    
    //   })
    // ).subscribe(room => {
    //   this.room = room;
    // });

    this.route.queryParams.subscribe((params) => {
      const roomId: number = params['id'];
      this.dataService.getRoomDetails(roomId).subscribe(result => this.room = result);
    }
      )

    
  }

}
