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
