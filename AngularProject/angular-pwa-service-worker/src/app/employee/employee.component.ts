import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service"

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  tableData:any 

  constructor(public empSer: EmployeeService) { }

  storeUser(empRef: any){
    this.empSer.storeTasks(empRef).subscribe(res => console.log("POST SUCCESSFUL", res))
  }

  fetchTask(){
    this.empSer.fetchTasks().subscribe(res => this.tableData = res)
  }

  ngOnInit(): void {
    this.fetchTask()
  }

}
