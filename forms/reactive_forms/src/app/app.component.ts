import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm: any;

  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [''],
      password:[''],
      confirmPassword:[''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {validators: PasswordValidator})

    this.registrationForm.get('subscribe').valueChanges.subscribe((checkedValue: any) => {
      const email = this.registrationForm.get('email');

      if (checkedValue) {
        email.setValidators(Validators.required)
      } else {
        email.clearValidators()
      }

      email.updateValueAndValidity()
    })
    
  }

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Hudir'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
    
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

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
