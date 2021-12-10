import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageSubmit=false

  contactData= new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    subject: new FormControl('',[Validators.minLength(10),Validators.required]),
    message: new FormControl('',[Validators.minLength(10),Validators.maxLength(200),Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  this.messageSubmit=true
  if(this.contactData.invalid){
    return
  }
  
}
}
