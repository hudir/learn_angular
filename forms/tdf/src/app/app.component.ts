import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('', 'rob@test.com', 5556665566, 'default', 'morning', true);

  validateTopic(value){
    if(value === 'default') {
      this.topicHasError = true;
    }

  }
}
