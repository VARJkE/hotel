import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/service/data.service';


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
    private dataService: DataService,
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
    }
    
    )
 }



}
