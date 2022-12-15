import { Component } from '@angular/core';
import { User } from '../helpers/user';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe-practise.component.html',
  styleUrls: ['./pipe-practise.component.css'],
})
export class PipeComponent {
  number1 = 1;
  number2 = 2;
  
  searchTerm: string;

  users: User[] = [
    { name: 'ahmed', age: 20 },
    { name: 'hamza', age: 20 },
    { name: 'manel', age: 20 },
    { name: 'yosra', age: 20 },
    { name: 'jihed', age: 20 },
    { name: 'raja', age: 20 },
  ];

  changeProperty() {
    this.users[0].name = 'ghoul';
  }

  changeReference() {
    // const refUsers = Object.assign([], this.users);
    // // or
    // const refUsers = [...this.users];
    // // or
    const refUsers = this.users.slice(0, this.users.length - 1);

    refUsers[0].name = 'ghoul';
    this.users = refUsers;
    console.log(this.users);
  }
}
