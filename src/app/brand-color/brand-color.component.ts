import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.ts',
  styleUrls: ['./brand-color.component.css'],
})
export class BrandColorComponent {
  @ViewChild('herehtml') ele:ElementRef;

  
}
