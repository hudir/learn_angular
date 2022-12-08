import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">
      Style Binding
    </h2>
    <h2 [style.color]="highlightColor">
      Style Binding 2
    </h2>
   
    <h2 [ngStyle]="titleStyles">
      Style Binding 3 with ngStyle
    </h2>
  `,
  styles: []
})
export class StyleBindingComponent {
  public name = "a user's name";
  public hasError = false
  public isSpecial = true;
  public highlightColor = "blue";

  public titleStyles={
    color: "pink",
    fontStyle: "italic"
  }

}
