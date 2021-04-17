import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-questions-panel',
  templateUrl: './questions-panel.component.html',
  styleUrls: ['./questions-panel.component.css']
})
export class QuestionsPanelComponent implements OnInit {

  addQuestionToBackend(questionObj){
    let quiz = JSON.parse(sessionStorage.getItem("quizData")|| "[]");
    let newQuiz = [...quiz , questionObj];
    sessionStorage.setItem("quizData", JSON.stringify(newQuiz));
  }

  submitForm(questionForm){
    console.log(questionForm)
    let formval = questionForm.value
    let data = {question: formval.question, 
                options: [
                          {value: formval.choice1, choiceId: uuid() , selected: formval.choiceCheck1 || false}, 
                          {value: formval.choice2, choiceId: uuid() , selected: formval.choiceCheck2 || false}, 
                          {value: formval.choice3, choiceId: uuid() , selected: formval.choiceCheck3 || false}, 
                          {value: formval.choice4, choiceId: uuid() , selected: formval.choiceCheck4 || false}
                        ]
            };
    questionForm.resetForm();

    this.addQuestionToBackend(data)
  }
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
