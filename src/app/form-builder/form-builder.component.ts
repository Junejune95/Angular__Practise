import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

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
      email: [''],
      phoneNumber: [''],
      address: [''],
    }),
  });
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('hello');
    console.log('my form:' + this.myForm.value);
  }
}
