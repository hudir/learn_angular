import { Component } from '@angular/core';

@Component({
  selector: '.app-event-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome hudir'">Greet</button>
    {{greeting}}
  `,
  styles: []
})
export class EventBindingComponent {
  public name="hudir's learn angular";
  public greeting = ""

  onClick(event: any){
    console.log(event)
    this.greeting = event.type
  }

}
