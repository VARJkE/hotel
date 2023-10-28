import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  contactForm!: FormGroup;

  ngOnInit() {
    this.buildContactForm();
  }

  buildContactForm() {
    this.contactForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [''],
        messageArea: ['']
      }
      )
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }


}
