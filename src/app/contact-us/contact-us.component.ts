import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  loading = false; 

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm() {
  this.submitted = true;
  this.success = false;
  this.error = false;

  if (this.contactForm.invalid) return;

  this.loading = true;

  emailjs.send(
    'service_pulcq45',
    'template_qdo24np',
    {
      first_name: this.contactForm.value.firstName,
      last_name: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    },
    'udGYRSa5y6aJvRn1J'
  ).then(() => {
    this.loading = false;
    this.success = true;
    this.contactForm.reset();
    this.submitted = false;
  }).catch(() => {
      this.loading = false;
      this.error = true;
    });
  }
}
