import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPurePipe',
  // pure: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: number, ...args: any[]): Number {
    return value + value;
  }
}
