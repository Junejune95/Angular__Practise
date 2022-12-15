import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomImpurePipe',
  pure: false,
})
export class CustomImpurePipe implements PipeTransform {
  transform(value: number, ...args: any[]): Number {
    console.log(`MyCustomImpurePipe#transform called, value ${value}`);;
    return value + value;
  }
}
