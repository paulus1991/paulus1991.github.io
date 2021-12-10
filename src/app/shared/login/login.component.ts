import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn=false
 userData= new FormGroup({
   username:new FormControl('',[Validators.email,Validators.required]),
   password:new FormControl('',[Validators.minLength(6),Validators.required])
 })

 get f(){return this.userData.controls}
  constructor( ) { }

  
  ngOnInit(): void {
    
  }
onSubmit(){
 this.loggedIn=true
 if(this.loggedIn){
   return ''
 }
 console.log(this.userData.value)
 console.log(this.loggedIn)

if(this.userData.invalid){
  return
}
 
}
}
