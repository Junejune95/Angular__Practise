import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainBow]',
})
export class RainBowDirective {
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey',
  ];

  @HostListener('keydown') newColor() {
    console.log('key up');
  }
}
