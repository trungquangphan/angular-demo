import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-reactive-form',
  templateUrl: './profile-reactive-form.component.html',
  styleUrls: ['./profile-reactive-form.component.css']
})
export class ProfileReactiveFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // this.profileForm = new FormGroup({
    //   email: new FormControl('mail@mail.com'),
    //   // required and minLength are the built-in validator
    //   username: new FormControl('',[Validators.required, Validators.minLength(6), this.forbiddenUsername]),
    //   check: new FormControl(''),
    //   passwordGroup: new FormGroup({
    //     password: new FormControl(''),
    //     confirmPassword: new FormControl(''),
    //   }, this.comparePassword),
    // });
// API consumer
    this.profileForm = this.formBuilder.group({
      email: ['', Validators.email],
      username: ['', [Validators.required, Validators.minLength(6), this.forbiddenUsername]],
      check: false,
      passwordGroup: this.formBuilder.group({
        password: '',
        confirmPassword: ''
      }, [this.comparePassword])
    });
  }

  onSubmitForm() : void {
    alert(JSON.stringify(this.profileForm.value));
    console.log(this.profileForm);
  }

  /**
   * 
   * @param control : control is the current element where is being applied by the validator
   * This method return an error object if there is error, otherwise return null
   */
  forbiddenUsername(control : AbstractControl) : any {
     const controlValue = control.value;

     if (controlValue === 'codegym') {
       return {
         forbiddenUsername : true
       }
     };
     return null;
  }

  comparePassword(control: AbstractControl): any {
    const passwordValue = control.value.password;
    const confirmPasswordValue = control.value.confirmPassword;
    if (passwordValue !== confirmPasswordValue) {
      return {
        passwordNotMatch: true
      }
    }
    return null;
  }

  get username(): AbstractControl {
    return this.profileForm.get('username');
  }

  get passwordGroup(): AbstractControl {
    return this.profileForm.get('passwordGroup');
  }

}
