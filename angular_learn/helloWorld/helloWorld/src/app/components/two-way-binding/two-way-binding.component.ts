import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: []
})
export class TwoWayBindingComponent {

  public name ="";

}
