import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
  `,
  styles: []
})
export class NgSwitchDirectiveComponent {
  public color = "black";

}
