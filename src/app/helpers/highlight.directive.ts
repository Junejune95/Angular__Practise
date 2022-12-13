import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
    console.log(this.defaultColor);
    this.onHighLight(this.defaultColor ? this.defaultColor : 'blue');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.defaultColor);
    console.log('enter');
    this.onHighLight('pink');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('leave');
    this.onHighLight('orange');
  }

  onHighLight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
