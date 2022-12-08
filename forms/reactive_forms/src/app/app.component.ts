import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  registrationForm = new FormGroup({
    userName: new FormControl('Hudir'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadApiData(){
    this.registrationForm.patchValue({
      userName: "Bruce",
      password: 'test',
      confirmPassword: "test"
    })

    // this.registrationForm.setValue({
    //   userName: "Bruce",
    //   password: 'test',
    //   confirmPassword: "test",
    //   address: {
    //     city: 'Schoeneweide',
    //     state: 'Berlin',
    //     postalCode: '112248'
    //   }
    // })
  }

}
