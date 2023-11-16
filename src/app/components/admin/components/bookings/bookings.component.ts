import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/Booking';
import { DataService } from 'src/app/service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingsDetailsComponent } from '../bookings-details/bookings-details.component';
import { MatPaginator } from '@angular/material/paginator';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  bookingData: any;
  bookings: Booking[] = [];
  allBookings: Booking[] = [];
  currentPage = 0;
  itemsPerPageOptions = [5, 10, 25, 100];
  itemsPerPage = this.itemsPerPageOptions[0];

@ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor
  (
    private dataService: DataService,
    public dialog: MatDialog,
    private modalService: NgbModal,
    ) {

  }

  ngOnInit() {
    this.loadAllBookings();
  }

  openDetailsModal(bookingId: number) {
    const modalRef = this.modalService.open(BookingsDetailsComponent);

      this.dataService.getBookingDetails().subscribe((result) => {
        const bookings = result.find(res => res.id === bookingId);
        this.bookingData = bookings;
        modalRef.componentInstance.bookingData = this.bookingData;
        });
  }

  loadAllBookings() {
    this.dataService.getBookingDetails().subscribe((data: any[]) => {
      this.allBookings = data;
      this.updateBookings();
    });
  }

  updateBookings() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.bookings = this.allBookings.slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.updateBookings();
  }
}

