import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.html',
  styleUrls: ['./brand-color.component.css'],
})
export class BrandColorComponent implements OnInit, AfterViewInit {
  @ViewChild('someElement', { static: false }) someElement: ElementRef;

  ngOnInit() {
    console.log(this.someElement);
    this.someElement.nativeElement.innerHTML = 'Hello Inner HTML';
  }

  ngAfterViewInit() {
    console.log(this.someElement);
  }
}
