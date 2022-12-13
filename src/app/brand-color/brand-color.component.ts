import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.ts',
  styleUrls: ['./brand-color.component.css'],
})
export class BrandColorComponent implements AfterViewInit {
  @ViewChild('herehtml') element: ElementRef;

  ngAfterViewInit() {
    console.log(this.element);
  }
}
