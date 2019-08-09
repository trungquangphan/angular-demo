import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile = {
    email: 'danang@codegym.vn',
    username: '123',
    check: true,
  };

  constructor() { }

  ngOnInit() {
  }


  onSubmitForm(profileForm): void {
    // this.profile.email = profileForm.form.controls.email.value;
    alert("Email: " + JSON.stringify(this.profile));
    console.log(profileForm);

    let arr = ['one','two','three'];
    arr.forEach(this.handleElement);
    arr.forEach((_, i) => {
      console.log("index: " + i );
    });
  }

  handleElement(element, index) {
    console.log("index: " + index + ", element:" + element);
  }

}
