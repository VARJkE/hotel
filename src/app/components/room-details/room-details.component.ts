import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RoomType } from 'src/app/models/RoomType';
import { DataService } from 'src/app/service/data.service';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  room!: RoomType;
  roomId: number = 0;

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
      this.roomId = params['id'];
      this.dataService.getRoomDetails(this.roomId).subscribe(result => this.room = result);
    }
      )

      this.galleryOptions = [
        {
          width: '650px',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 500,
          preview: false
        }
      ];
  
      this.galleryImages = [
        {
          small: 'assets/img/' + this.roomId + '/1.jpg',
          medium: 'assets/img/' + this.roomId + '/1.jpg',
          big: 'assets/img/' + this.roomId + '/1.jpg'
        },
        {
          small: 'assets/img/' + this.roomId + '/2.jpg',
          medium: 'assets/img/' + this.roomId + '/2.jpg',
          big: 'assets/img/' + this.roomId + '/2.jpg'
        },
        {
          small: 'assets/img/' + this.roomId + '/3.jpg',
          medium: 'assets/img/' + this.roomId + '/3.jpg',
          big: 'assets/img/' + this.roomId + '/3.jpg'
        },{
          small: 'assets/img/' + this.roomId + '/4.jpg',
          medium: 'assets/img/' + this.roomId + '/4.jpg',
          big: 'assets/img/' + this.roomId + '/4.jpg'
        }
      ];
  }

}
