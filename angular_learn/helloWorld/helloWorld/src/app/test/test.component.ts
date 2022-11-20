import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template: `<div>
               InLine template
               12
             </div>`,
  // styleUrls: ['./test.component.css']
  styles: [`
  div {
    color: red;
  }
  `]
})
export class TestComponent {

}
