import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-practise',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public submitted = false;
  userForm = new FormGroup({
    title: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    acceptTerm: new FormControl('', Validators.required),
  });

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    const result = this.userForm.value;
    console.log('Title:' + result.title);
    console.log('First Name:' + result.firstName);
    console.log('Last Name:' + result.lastName);
  }
}
