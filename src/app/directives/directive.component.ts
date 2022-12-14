import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent {
  public isTemplate2 = true;
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'UK',
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'UK',
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'US',
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'MM',
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'TH',
    },
  ];
}
