import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-profile-submit-reactive',
  templateUrl: './profile-submit-reactive.component.html',
  styleUrls: ['./profile-submit-reactive.component.css']
})
export class ProfileSubmitReactiveComponent implements OnInit {


  profileForm : FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', this.forbiddenUsernameValidator),
      check: new FormControl(true),
      passwordGroup: new FormGroup({
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      }, this.comparePassword,),
    });
  }

  onSubmitForm(): void {
    alert(JSON.stringify(this.profileForm.value));
    console.log(this.profileForm);
  }

  forbiddenUsernameValidator(control: AbstractControl): any {
    if (control.value === 'codegym') {
      return {
        forbiddenUsername: true
      };
    }
    return null;
  }

  comparePassword(control: AbstractControl): any {
    const passwordGroupControl = control.value;
    let passwordControl = passwordGroupControl.password;
    let confirmPasswordControl = passwordGroupControl.confirmPassword;
    if (passwordControl === confirmPasswordControl) {
      return null;
    }
    return {
      passwordNotMatch: true
    }
  }


  get email() { return this.profileForm.get('email'); }
  get username() {return this.profileForm.get('username')}
  get check() {return this.profileForm.get('check')}
  get passwordGroup() {return this.profileForm.get('passwordGroup')}
}
