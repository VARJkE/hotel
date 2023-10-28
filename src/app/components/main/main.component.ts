import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})

export class MainComponent {
  datesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
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
 
 onSubmit() {
  console.log('checkin', this.datesForm.value)
 }

}
