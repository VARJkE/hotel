import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bookings-details',
  templateUrl: './bookings-details.component.html',
  styleUrls: ['./bookings-details.component.css']
})
export class BookingsDetailsComponent {
  @Input() bookingData: any;
  


  constructor
  (
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit() {

  }


    

}
