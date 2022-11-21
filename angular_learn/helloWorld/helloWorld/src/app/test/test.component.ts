import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template: `<div>
               welcome {{name}}
             </div>
             <h2>{{2+2}}</h2>
             <h1 class="text-success">{{"Welcome " + name}}</h1>
             <h1 [class]="successClass">{{"Welcome " + name}}</h1>
             <h1 class="text-special" [class]="successClass" >{{"Welcome " + name}}</h1>
             <h1 [class.text-danger]="hasError">{{"Welcome " + name}}</h1>


             <h2>{{name.length}}</h2>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>{{greetUser()}}</h2>
             <h2>{{siteUrl}}</h2>
             <input type="text" value="Vishwas" [id]="myId">
             <input type="text" value="Vishwas2" id="{{myId}}" [disabled]="isDisabled">
             <input type="text" value="Vishwas2" id="{{myId}}" bind-disabled="isDisabled">`,
  // styleUrls: ['./test.component.css']
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
})
export class TestComponent {
  public name = "a user's name";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;

  // Class Binding
  public successClass = "text-success"
  public hasError = true

  greetUser(): string{
    return "Hello " + this.name;
  }

}
