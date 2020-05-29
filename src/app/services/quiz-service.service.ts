import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  readonly rootUrl = 'https://localhost:44348/';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswer: number=0;
  User: string = " ";
  constructor(private http: HttpClient) { }
  displayTime(){
    return Math.floor(this.seconds/3600)+':'+Math.floor(this.seconds/60)+':'+Math.floor(this.seconds%60);
  }
  insertParticipant(name: string, email: string){
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant',body);
  }
  getQuestions(){
    return this.http.get(this.rootUrl + '/api/Questions');
  }
  getAnswers(){
    var body = this.qns.map(x=>x.QnID);
    return this.http.post(this.rootUrl+'/api/Answers',body);
  }
  getParticipantName(){
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }
  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswer;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }

}
