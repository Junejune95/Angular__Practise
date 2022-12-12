import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector:'app-child',
  templateUrl:'./child.component.html',
  styleUrls:['./child.component.css']
})
export class ChildComponent{
  @Input()
  childtitle:any;

  @Output()
  emitSay=new EventEmitter();

  onSayHello(){
    this.emitSay.emit('Hello Parent');
  }
}