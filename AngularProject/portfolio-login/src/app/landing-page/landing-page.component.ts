import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  firstName = ""
  lastName = ""
  login = ""
  tableData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let userVal = JSON.parse(sessionStorage.getItem('formVal'))
    this.firstName = userVal.firstName
    this.lastName = userVal.lastName
    this.login = userVal.login
  }

  submitForm(formVal) {
    this.tableData = [...this.tableData, formVal]
  }

}
