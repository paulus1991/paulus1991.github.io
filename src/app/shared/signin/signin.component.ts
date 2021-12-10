import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
registered=false
  registrationData= new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.minLength(6),Validators.maxLength(20),Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',[Validators.minLength(6), Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.registered=true
     if(this.registrationData.invalid){
      return
    }
   
  }
}
