import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ServicesService,
    private quizService: QuizServiceService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(6)]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    
    });
  }

  onSubmit(name:string,email:string){
    this.quizService.User = this.loginForm.controls.username.value;
    console.log(this.quizService.User);
    if(this.loginForm.invalid){
      return;
    }
    
  

  const loginData = {
    username: this.loginForm.controls.username.value,
    password: this.loginForm.controls.password.value,
    email: this.loginForm.controls.email.value
  };

  this.apiService.login(loginData).subscribe((data: any) =>{
   
    this.message = data.message;
    console.log(this.message);

    if(data.token){
      alert(data.message);
      this.quizService.insertParticipant(name,email).subscribe(
        (data:any)=>{
          localStorage.clear();
          localStorage.setItem('participant',JSON.stringify(data));
         
        }
      );
      this.router.navigate(['/quiz',this.quizService.User])
      

    }else{
      this.invalidLogin = true;
      alert(data.message);
      
    }
  });

}

}
