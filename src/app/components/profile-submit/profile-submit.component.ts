import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-submit',
  templateUrl: './profile-submit.component.html',
  styleUrls: ['./profile-submit.component.css']
})
export class ProfileSubmitComponent implements OnInit {

  profile = {
    username: "codegym",
    email: "danang@codegym.vn",
    check: true,
  };

  constructor() { }

  ngOnInit() {
  }


  onSubmit(profileForm) {
    var email = profileForm.controls.email.value;
    console.log(profileForm);
  }
}
