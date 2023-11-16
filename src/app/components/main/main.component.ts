import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})

export class MainComponent {
  datesForm!: FormGroup;
  minDate: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    ) {
    
  }

 ngOnInit() {
  this.buildDatesForm();
  const today = new Date();
  this.minDate = today.toISOString().split('T')[0];

 }

 buildDatesForm() {
  this.datesForm = this.formBuilder.group(
    {
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    }
  )
 }
 
 checkAvailableRooms() {
  this.router.navigate(['rooms/available'], {
    queryParams: { 
      checkin: this.datePipe.transform(this.datesForm.value.checkInDate, 'yyyy-MM-dd'), 
      checkout: this.datePipe.transform(this.datesForm.value.checkOutDate, 'yyyy-MM-dd')
    }
    }
    
    )
 }



}
