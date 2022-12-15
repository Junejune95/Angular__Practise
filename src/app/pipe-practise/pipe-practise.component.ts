import {Component} from '@angular/core';
import { User } from '../helpers/user';

@Component({
  selector:'app-pipe',
  templateUrl:'./pipe-practise.component.html',
  styleUrls:[
    './pipe-practise.component.css'
  ]
})

export class PipeComponent{
  searchTerm:string;
  
  users: User[] = [
    { name: "ahmed", age: 20 },
    { name: "hamza", age: 20 },
    { name: "manel", age: 20 },
    { name: "yosra", age: 20 },
    { name: "jihed", age: 20 },
    { name: "raja", age: 20 }
  ];


}
