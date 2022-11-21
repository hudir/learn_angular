import { Component } from '@angular/core';

@Component({
  selector: '[app-tem-ref-vair]',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    {{showMessage}}
  `,
  styles: []
})
export class TemRefVairComponent {
  public name = "hudir";
  public showMessage="";

  logMessage(message: string){
    this.showMessage = message
  }

}
