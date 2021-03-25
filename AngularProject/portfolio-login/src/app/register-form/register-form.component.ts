import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submitForm(formVal) {
    console.log(formVal)
    sessionStorage.setItem('formVal', JSON.stringify(formVal))
    this.router.navigate(['login']);
  }
}
