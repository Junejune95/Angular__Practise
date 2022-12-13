import { Directive, HostListener, HostBinding } from '@angular/core';

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

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') bordercolor: string;
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.bordercolor = this.possibleColors[colorPick];
  }
}
