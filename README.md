# learn_angular
follow Angular Tutorial [https://www.youtube.com/watch?v=nGr3C3wbh9c&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=33]

### 3 ways of use selector
- first use as a tag
```
selector: "app-string"
```
in html
```
<app-string></app-string>
```
- second use as a class name
```
selector: ".app-string"
```
in html
```
<div class="app-string"></div>
```
- third use as an atribut
```
selector: "[app-string]"
```
in html
```
<div app-string></div>
```

### what you can not do in the template

- assign a variable => a = 2+2
- use the js globe variable like window.xxx

- instead you can do it in the class

### Property Binding
- Attributes and properties are not the same
- Attributes - HTML
- Properties - DOM (Document Object Model)
- Attributes initialize DOM properties and then they are done. Attribute values cannot change once they are initialized.
- Property values however can change

- set Attributes in angular 
```
<input type="text" value="Vishwas" [id]="myId">
```
public myId = "testId";

- set none string attributes
```
<input type="text" value="Vishwas2" id="{{myId}}" disabled="false">
// this is not going to work
 <input type="text" value="Vishwas2" id="{{myId}}" [disabled]="false">
  <input type="text" value="Vishwas2" id="{{myId}}" bind-disabled="isDisabled">
 ```

 - set class base on a boolean value
 ```
  <h1 [class.text-danger]="hasError">{{"Welcome " + name}}</h1>
  public hasError = true
 ```

 ### class binding
 modify classes based on some boolean values
 ```css
  styles: [`
  div {
    color: red;
  }
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
 ```
 ```html
   <h1 [ngClass]="messageClasses">{{"Welcome " + name + " messageClasses"}}</h1>
 ```
```ts
 // Class Binding
  public successClass = "text-success"
  public hasError = true

  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
````

### style binding

### two-way-binding - react controlled input - banana in the box [()] attribute binding and event binding
```
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
```
need import FormsModule in app.modules.ts

### Structural Directives
Add or remove Html elements

- ngIf
- if else
```ts
   `
    <h2 *ngIf="displayName; else elseBlock">
      learn Angular
    </h2>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
  `,
```
if then else
```
`
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    
    <ng-template #thenBlock>
      <h2>learn Angular</h2>
    </ng-template>
    
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
  `,
```
- ngSwitch
```ts
`
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
  `
//   in the class 
  public color = "black";
```

- ngFor

```ts
import { Component } from '@angular/core';

@Component({
  selector: '[app-ng-for-directive]',
  template: `
    <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
       <h2>first as f: {{f}}; index: {{i}}; color: {{color}}; last as l: {{l}}; odd as o:{{o}}; even as e {{e}}</h2>
    </div>
    
  `,
  styles: []
})
export class NgForDirectiveComponent {
  public colors = ["red", "blue", "green", "yellow"]

}
```

### component interaction

- Sending data from parent to child: passing a variable as an attribute in the child component's html selector

```
<child-component [parentData] = "a variable" ></child-component>
```

and get it in the child component with @Input

```
class {
    @Input('parentData') public variableName : any;
}
```

or

```
class {
    @Input() public parentData : any;
}
```

- Sending data from child to parent: using EventEmitter class

```
export class ChildComponentComponent {

  @Output() public childEvent = new EventEmitter()

  fireEvent(){
    this.childEvent.emit('Greeting from child component Event')
  }
}
```

in the parent component we have an empty variable: public message = ""

```html
<h1>
    {{message}}
</h1>

<app-child-component (childEvent)="message=$event" [parentData]="name"></app-child-component>
```
in the childEvent we assign message = $event 


### pipe data - transform data before display them. only transform date for the view, it not change value of the property in class


### services

- A class with a specific purpose
- 1 ) Share data
- 2 ) Implement application logig
- 3 ) External Interaction(connect to database)

Naming convention - .service.ts

### Dependency Injection

- Code without DI - drawbacks
- DI as design pattern
- DI as a framework

1 ) Define the EmployeeService class
2 ) Register with Injector
3 ) Declare as dependency in EmpList and EmgDetail

Hierarchical DI in Angular
                    APPModule   <-- injector goes here 
                       |
                  APPComponent
                  |          |
               EmpList   EmgDetail


## Http get and error handling(Rs)

```ts
import { IEmployee } from './../employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "../../assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(()=> new Error((error.message || "Server Error")))
  }
}
```





# TDF (Template Driven Forms) - most code in template

- Two way date binding with ngModel
- Bulky HTML and minimal component code
- Automatically tracks the form and form elements state and validity
- Unit testing is a challenge
- Readability decreases with complex forms and validations
- Suitable for simple scenarios


       template reference variable
```
  <form #userForm="ngForm">
```

oneWay binding =>
[ngModel]="data.name"

twoWay binding => 
[(ngModel)]="data.name"


### Track control state and validity

State                            | Class if true  | Class if false

- the control has been visited         ng-touched     ng-untouched
- the control's value has changed       ng-dirty       ng-pristine
- the control's value is valid          ng-valid       ng-invalid

### ngModel properties

untouched touched pristine dirty Valid invalid