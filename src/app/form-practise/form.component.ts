import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-practise',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    acceptTerm: new FormControl(''),
  });

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    const result = this.userForm.value;
    console.log('Title:' + result.title);
    console.log('First Name:' + result.firstName);
    console.log('Last Name:' + result.lastName);
  }
}
