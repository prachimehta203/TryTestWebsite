import { Component } from '@angular/core';
import { QuizServiceService } from './services/quiz-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-wtl';
  constructor(private quizService:QuizServiceService){}
  onSubmit(){
    if(this.quizService.User==" "){
      alert("Please login to attempt quiz!");
    }
  }
}
