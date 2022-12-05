import { EmployeeService } from './../../../services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent {

  public employees: {name: string, id: number, age: number}[]  = []
  public errorMsg:any;

  constructor(private _employeeService: EmployeeService){}

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error)
  }

}
