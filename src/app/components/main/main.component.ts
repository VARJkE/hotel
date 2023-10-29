import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})

export class MainComponent {
  datesForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private datePipe: DatePipe
    ) {
    
  }

 ngOnInit() {
  this.buildDatesForm();

 }

 buildDatesForm() {
  this.datesForm = this.formBuilder.group(
    {
      checkInDate: [''],
      checkOutDate: ['']
    }
  )
 }
 
 checkAvailableRooms() {
  this.router.navigate(['rooms/available'], {
    queryParams: { 
      checkin: this.datePipe.transform(this.datesForm.value.checkInDate, 'yyyy-MM-dd'), 
      checkout: this.datePipe.transform(this.datesForm.value.checkOutDate, 'yyyy-MM-dd')
    }
    })
 }

}
