import { Component } from '@angular/core';

@Component({
  selector: '.app-pipes',
  template: `
    <h1>String</h1>
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{message | titlecase}}</h2>
    <h2>{{name | slice:3:4}}</h2>
    <h2>{{person | json}}</h2> 

    <h1>Number</h1>
    <h2>{{5.678 | number: '1.2-3'}}</h2>
    <h2>{{5.678 | number: '3.4-5'}}</h2>
    <h2>{{5.678 | number: '3.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>

    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency: 'GBP'}}</h2>
    <h2>{{0.25 | currency: 'EUR'}}</h2>
    <h2>{{0.25 | currency: 'CNY': 'code'}}</h2>

    <h1>Date</h1>
    <h2>{{ date }}</h2>
    <h2>{{ date | date:'short' }}</h2>
    <h2>{{ date | date:'shortDate' }}</h2>
    <h2>{{ date | date:'shortTime' }}</h2>

  `,
  styles: []
})
export class PipesComponent {

  public name = "Hudir";
  public message = "Welcome to Angular pipes";
  public person = {
    "firstName": "John",
    lastName: "Doe"
  };
  public date = new Date();
}
