import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.css']
})
export class ClientPaymentComponent implements OnInit {
show:Boolean=false
showContact:Boolean=false
dataEntryFinal:any
id:any
filteredJson:any
paymentInfo:Boolean=false;
promoCode:Boolean=false;
paymentData= new FormGroup({
  firstName:new FormControl('',Validators.required),
  lastName:new FormControl('',Validators.required),
  street:new FormControl('',Validators.required),
  city:new FormControl('',Validators.required),
  province: new FormControl('',Validators.required),
  postalCode:new FormControl('',Validators.required),
})
cardData= new FormGroup({
  inputValues:new FormControl('',[Validators.minLength(4),Validators.maxLength(4),Validators.pattern(/^[0-9]\d*$/),Validators.required]),
  cvtValue: new FormControl('',[Validators.required,Validators.maxLength(3),Validators.minLength(3),Validators.pattern(/^[0-9]\d*$/)])


})
cardDataMobile=new FormGroup({
  inputValuesMobile:new FormControl('',[Validators.minLength(16),Validators.maxLength(16),Validators.pattern(/^[0-9]\d*$/),Validators.required]),
  cvtValueMobile: new FormControl('',[Validators.required,Validators.maxLength(3),Validators.minLength(3),Validators.pattern(/^[0-9]\d*$/)])

})

  constructor(private http :HttpClient, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
  this.filteredJson=null
  this.http.get('../../../assets/places.json').subscribe(data=>{
  this.dataEntryFinal=data
  console.log(this.dataEntryFinal)

  this.activeRouter.params.subscribe(id=>{
    this.id=+id.id
    console.log(this.id)
    this.filteredJson=this.dataEntryFinal.filter(id=>id.id===this.id)
   })
})
console.log(this.filteredJson[0].id)

  }
  onChange(){
this.show=!this.show
console.log(this.show)
  }
  onShowContact(){
    this.showContact=!this.showContact
  }
  onSubmit(){
    this.paymentInfo=true;
console.log(this.paymentData.value)

  }
 onPromo(event){
   let i = event.target.value
   if(i==="promo"){
    this.promoCode=true

   }
   else{
     return
   }
   console.log(i)
 }
 
}
