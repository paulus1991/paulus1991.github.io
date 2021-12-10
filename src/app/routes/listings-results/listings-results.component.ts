import { Component, OnInit ,ViewChild} from '@angular/core';
 import * as dayjs from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from '../../../../node_modules/ngx-daterangepicker-material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings-results',
  templateUrl: './listings-results.component.html',
  styleUrls: ['./listings-results.component.css']
})
export class ListingsResultsComponent implements OnInit {
  searchText

  selected: {startDate: dayjs.Moment, endDate: dayjs.Moment};
  @ViewChild(DaterangepickerDirective, { static: true }) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  products:any=[]
  key:string='price'
  hotels:any
  hotel:any
reverse:boolean=false
  
   constructor(private httpClient :HttpClient, private router :Router) { this.selected = {
    startDate: dayjs(),
    endDate: dayjs()
  }}

  ngOnInit(): void {
    this.httpClient.get('../../../assets/places.json').subscribe(data=>{
      console.log(data)
      this.products=data
     })
     this.picker = this.pickerDirective.picker;
   
  }
  ngModelChange(e) {
    console.log({'ngModelChange()': e});
  }
  change(e) {
    console.log({'change()': e});
  }
  choosedDate(e) {
     this.inlineDate = e;
  }

  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
  open(e) {
    this.pickerDirective.open(e);
  }
  clear(e) {
    // this.picker.clear(); // we can do
    this.selected = null; // now we can do
  }
  onHotelChange( ){
this.hotels =this.products.filter((person)=>{
  return person.hotel === true
})
this.products=this.hotels
console.log(this.hotels)
      }
onSuperb(){
  this.hotels=this.products.filter((person)=>{
    return person.quality ==='Superb'
  })
  this.products=this.hotels
}
onBeach(){
  this.hotels=this.products.filter((person)=>{
    return person.beach ===true
  })
  this.products=this.hotels
}
onParking(){
  this.hotels=this.products.filter((person)=>{
    return person.parking ===true
  })
  this.products=this.hotels
}
onRestaurant(){
  this.hotels=this.products.filter((person)=>{
    return person.restaurant ===true
  })
  this.products=this.hotels
}
onRoomService(){
  this.hotels=this.products.filter((person)=>{
    return person.roomService ===true
  })
  this.products=this.hotels
}
onPrivateBath(){
  this.hotels=this.products.filter((person)=>{
    return person.privateBath ===true
  })
  this.products=this.hotels
}
onPersonalOffice(){
  this.hotels=this.products.filter((person)=>{
    return person.personalOffice ===true
  })
  this.products=this.hotels
}
onMiniBar(){
  this.hotels=this.products.filter((person)=>{
    return person.miniBar ===true
  })
  this.products=this.hotels
}
onBathTub(){
  this.hotels=this.products.filter((person)=>{
    return person.bathtub ===true
  })
  this.products=this.hotels
}

onWellness(){
  this.hotels=this.products.filter((person)=>{
    return person.wellness ===true
  })
  this.products=this.hotels
}

onGym(){
  this.hotels=this.products.filter((person)=>{
    return person.gym ===true
  })
  this.products=this.hotels
}
     onReset(){
       this.httpClient.get('../../../assets/places.json').subscribe(data=>{
        console.log(data)
        this.hotel=data
        this.products=this.hotel
       })
     }
sort(key:any){
this.reverse=!this.reverse
this.key=key
  }
toggleEditable(event) {
  if ( event.target.checked ) {
      this.hotels = true;

 } else{
   this.hotels=false
   this.httpClient.get('../../../assets/places.json').subscribe(data=>{
    console.log(data)
    this.hotel=data
    this.products=this.hotel

   })
  }


}

}
