import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrandColorComponent } from '../brand-color/brand-color.component';

@Component({
  selector: 'app-property-deco',
  templateUrl: './propertydeco.component.html',
  styleUrls: ['./propertydeco.component.css'],
})
export class PropertyDecoComponent implements AfterViewInit {
  childtitle = 'You are my child';

  @ViewChildren('BrandColorComponent') bcom: QueryList<NgModel>;

  onSayHello(e: any) {
    alert(e);
  }

  ngAfterViewInit() {
    console.log(this.bcom.length,'Here Property DEco');
  }
}
