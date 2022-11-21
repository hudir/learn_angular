import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent {

  public employees  = [
    {id: 1, name: "Andrew", age: 30},
    {id: 2, name: "Brandon", age: 25},
    {id: 3, name: "Christina", age: 26},
    {id: 4, name: "Elena", age: 28}
  ]

}
