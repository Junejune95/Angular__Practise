import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  myForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    about: [''],
    contact: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      address: [''],
    }),
  });
  constructor(private fb: FormBuilder) {}

  get f() {
    return this.myForm.controls;
  }
  get fg() {
    return this.myForm.controls.contact.controls;
  }
  onSubmit() {
    console.log('hello');
    if (this.myForm.invalid) {
      return;
    }
    console.log('my form:', this.myForm.value);
  }
}
