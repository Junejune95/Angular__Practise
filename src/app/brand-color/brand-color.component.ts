import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  ViewChildren,
  QueryList,
  Input,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.html',
  styleUrls: ['./brand-color.component.css'],
})
export class BrandColorComponent implements OnInit, AfterViewInit {
  @Input()
  text: any;

  @ViewChild('someElement', { static: false }) elementDynamic: ElementRef;
  @ViewChild('someElement2', { static: true }) elementStatic: ElementRef;

  @ViewChildren('applicationInfo') domReference: QueryList<String>;
  public userName: any;
  public userAge: any;
  public userDesignation: any;

  ngOnInit() {
    console.log(this.elementStatic);
    console.log(this.domReference);
    this.elementStatic.nativeElement.innerHTML = 'Hello Static';
  }

  ngAfterViewInit() {
    console.log(this.domReference);
    console.log(this.elementDynamic);
    this.elementDynamic.nativeElement.innerHTML = 'Hello Dynamic';
    this.elementDynamic.nativeElement.style = 'color:red';
  }
}
