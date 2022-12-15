import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPurePipe',
  // pure: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: number, ...args: any[]): Number {
    console.log(`MyCustomImpurePipe#transform called, value ${value}`);

    return value + value;
  }
}
