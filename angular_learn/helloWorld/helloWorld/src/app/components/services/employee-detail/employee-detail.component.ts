import { EmployeeService } from './../../../services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent {
  public employees: {name: string, id: number, age: number}[]  = []

  constructor(private _employeeService: EmployeeService){}

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }

}
