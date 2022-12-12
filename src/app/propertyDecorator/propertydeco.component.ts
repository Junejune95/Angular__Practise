import { Component } from '@angular/core';

@Component({
  selector: 'app-property-deco',
  templateUrl: './propertydeco.component.html',
  styleUrls: ['./propertydeco.component.css'],
})
export class PropertyDecoComponent {
  childtitle="You are my child";

  onSayHello(e:any){
    alert(e);
  }
}
