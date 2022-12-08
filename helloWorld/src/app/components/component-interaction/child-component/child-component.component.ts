import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
  <h2>{{"Hello "+ name}} from the child component</h2>
  <button (click)="fireEvent()">Send Event(from child to parent component)</button>
  `,
  styles: []
})
export class ChildComponentComponent {
  
  @Input('parentData') public name:string = '';

  @Output() public childEvent = new EventEmitter()

  fireEvent(){
    this.childEvent.emit('Greeting from child component Event')
  }


}
