import { Component } from '@angular/core';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  ngOnInit() {

    this.galleryOptions = [
      { 
        "image": false, "height": "250px", "width": "100%" 
      },
      { 
        "breakpoint": 800, "width": "100%", "thumbnailsColumns": 2 
      }

    ];

    this.galleryImages = [
      {
        small: 'assets/img/' + 1 + '/1.jpg',
        medium: 'assets/img/' + 1 + '/1.jpg',
        big: 'assets/img/' + 1 + '/1.jpg'
      },
      {
        small: 'assets/img/' + 1 + '/2.jpg',
        medium: 'assets/img/' + 1 + '/2.jpg',
        big: 'assets/img/' + 1 + '/2.jpg'
      },
      {
        small: 'assets/img/' + 1 + '/3.jpg',
        medium: 'assets/img/' + 1 + '/3.jpg',
        big: 'assets/img/' + 1 + '/3.jpg'
      },{
        small: 'assets/img/' + 1 + '/4.jpg',
        medium: 'assets/img/' + 1 + '/4.jpg',
        big: 'assets/img/' + 1 + '/4.jpg'
      },
      {
        small: 'assets/img/' + 2 + '/1.jpg',
        medium: 'assets/img/' + 2 + '/1.jpg',
        big: 'assets/img/' + 2 + '/1.jpg'
      },
      {
        small: 'assets/img/' + 2 + '/2.jpg',
        medium: 'assets/img/' + 2 + '/2.jpg',
        big: 'assets/img/' + 2 + '/2.jpg'
      },
      {
        small: 'assets/img/' + 2 + '/3.jpg',
        medium: 'assets/img/' + 2 + '/3.jpg',
        big: 'assets/img/' + 2 + '/3.jpg'
      },{
        small: 'assets/img/' + 2 + '/4.jpg',
        medium: 'assets/img/' + 2 + '/4.jpg',
        big: 'assets/img/' + 2 + '/4.jpg'
      }
    ];
  }

}
