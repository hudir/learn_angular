import { Component } from '@angular/core';

@Component({
  selector: '[app-component-interaction]',
  templateUrl: "./component-interaction.component.html",
  styles: []
})
export class ComponentInteractionComponent {
  title = 'app';
  public name = 'hudir'

  // get data from child component
  public message = ""

}
