import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  storeTasks(emp:any){
    return this.http.post("http://localhost:3000/tasks", emp)
  }

  fetchTasks(){
    return this.http.get("http://localhost:3000/tasks")
  }
}
