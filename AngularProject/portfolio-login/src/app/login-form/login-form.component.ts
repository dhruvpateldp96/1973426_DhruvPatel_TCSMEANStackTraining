import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submitForm(formVal) {
    console.log(formVal)
    let trueVal = JSON.parse(sessionStorage.getItem('formVal'))

    if (trueVal.login == formVal.login && trueVal.password == formVal.password) {
      this.router.navigate(['landing']);
    }
  }

}
