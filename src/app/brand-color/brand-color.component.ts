import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.html',
  styleUrls: ['./brand-color.component.css'],
})
export class BrandColorComponent implements OnInit, AfterViewInit {
  @ViewChild('someElement', { static: false }) elementDynamic: ElementRef;
  @ViewChild('someElement2', { static: true }) elementStatic: ElementRef;

  // @ViewChildren('NgModel') domReference: QueryList<NgModel>;
  public userName: any;
  public userAge: any;
  public userDesignation: any;

  ngOnInit() {
    console.log(this.elementStatic);
    this.elementStatic.nativeElement.innerHTML = 'Hello Static';
  }

  ngAfterViewInit() {
    console.log(this.elementDynamic);
    this.elementDynamic.nativeElement.innerHTML = 'Hello Dynamic';
  }
}
