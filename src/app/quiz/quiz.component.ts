import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizServiceService } from '../services/quiz-service.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  data : string = " ";
  constructor(private router: Router,private quizService:QuizServiceService,private activated_router:ActivatedRoute) { }

  ngOnInit() {
    this.data = this.activated_router.snapshot.paramMap.get('data');
    this.quizService.seconds=0;
    this.quizService.qnProgress=0;
    this.quizService.getQuestions().subscribe(
      (data:any)=>{
        this.quizService.qns = data;
        this.startTimer();
      }
    );
  }
  startTimer(){
    this.quizService.timer = setInterval(()=>{
      this.quizService.seconds++;
    },1000);
  }
  Answer(qID,choice){
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    this.quizService.qnProgress++;
    if(this.quizService.qnProgress==4){
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

  
  SignOut(){
    localStorage.clear();
    this.quizService.User = " ";
    clearInterval(this.quizService.timer);
    this.router.navigate(['/login']);
  }

}
