import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './signin/view/view.component';
import { EditComponent } from './signin/edit/edit.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { QuizServiceService } from './services/quiz-service.service';
import { AuthGuard } from './auth/auth.guard';
import { ResultComponent } from './result/result.component';
import { TrytestComponent } from './trytest/trytest.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    QuizComponent,
    FeedbackComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    ViewComponent,
    EditComponent,
    ResultComponent,
    TrytestComponent,
    
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ServicesService,QuizServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
