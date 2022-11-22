import { EmployeeService } from './../../../services/employee.service';
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

  public employees: {name: string, id: number, age: number}[]  = []

  constructor(private _employeeService: EmployeeService){}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
