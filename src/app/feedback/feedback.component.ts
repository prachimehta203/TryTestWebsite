import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ServicesService,
    private router: Router,
  ) { }

  addForm1: FormGroup;

  ngOnInit() {
    this.addForm1 = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      
    });
  }

  onSubmit1(){
    console.log(this.addForm1.value);
    this.apiService. (this.addForm1.value)
    .subscribe( data => {
      
    });
  }

}
