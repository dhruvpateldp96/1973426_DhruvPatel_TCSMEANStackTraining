import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-panel',
  templateUrl: './test-panel.component.html',
  styleUrls: ['./test-panel.component.css']
})
export class TestPanelComponent implements OnInit {

  quiz: Array<{question:String, options:Array<{value: String, choiceId: Number, selected:boolean}>}>
  marksScored: any;
  totalMarks: any;

  constructor() { }

  fetchDataFromBackend(){
    return JSON.parse(sessionStorage.getItem("quizData") || "[]");
  }

  calculateMarks(formVal: any){
    let userAns = Object.values(formVal)
    let correctAns = this.quiz.map(({question, options}) => {
      return options.filter((option) => option.selected)[0].value})
    let count = 0
    
    for(let idx in correctAns){
      if (correctAns[idx] == userAns[idx]){
        count += 1
      }
    }
    return count
  }

  submitForm(form){
    this.marksScored = this.calculateMarks(form.value);
    this.totalMarks = this.quiz.length;
  }

  ngOnInit(): void {
    this.quiz = this.fetchDataFromBackend();
    console.log(this.quiz)
  }

}
