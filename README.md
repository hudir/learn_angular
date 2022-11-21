# learn_angular
follow Angular Tutorial

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
-ngFor