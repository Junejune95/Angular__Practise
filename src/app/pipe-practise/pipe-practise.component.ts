import { Component } from '@angular/core';
import { User } from '../helpers/user';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe-practise.component.html',
  styleUrls: ['./pipe-practise.component.css'],
})
export class PipeComponent {
  searchTerm: string;

  users: User[] = [
    { name: 'ahmed', age: 20 },
    { name: 'hamza', age: 20 },
    { name: 'manel', age: 20 },
    { name: 'yosra', age: 20 },
    { name: 'jihed', age: 20 },
    { name: 'raja', age: 20 },
  ];

  changeByProperty() {
    this.users[0].name = 'ghoul';
  }

  changeByReference() {
    const refUsers = Object.assign([], this.users);
    // // or
    // const refUsers = [...this.users];
    // // or
    // const refUsers = this.users.slice();

    refUsers[0].name = 'ghoul';
    this.users = refUsers;
  }
}
