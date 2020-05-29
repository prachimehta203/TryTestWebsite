import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizServiceService,private router: Router) { }

  ngOnInit() {
    this.quizService.getAnswers().subscribe(
      (data:any)=>{
        this.quizService.correctAnswer=0;
        this.quizService.qns.forEach((e,i)=>{
          if(e.answer == data[i])
          this.quizService.correctAnswer++;
          e.correct = data[i];
        });
      }
    );
  }

  onSubmit(){
    alert("Your Quiz is successfuly submitted!");
    this.router.navigate(['/home']);
  }
  restart(){
    this.router.navigate(['/quiz',this.quizService.User]);
  }
  SignOut(){
    localStorage.clear();
    clearInterval(this.quizService.timer);
    this.router.navigate(['/login']);
  }
}
