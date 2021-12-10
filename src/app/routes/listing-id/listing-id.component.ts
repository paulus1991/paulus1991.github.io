import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as dayjs from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from '../../../../node_modules/ngx-daterangepicker-material';
@Component({
  selector: 'app-listing-id',
  templateUrl: './listing-id.component.html',
  styleUrls: ['./listing-id.component.css']
})
export class ListingIdComponent implements OnInit {
  selected: {startDate: dayjs.Moment, endDate: dayjs.Moment};
  @ViewChild(DaterangepickerDirective, { static: true }) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
 dataEntry:any
 id:any
 filterJson:any
 finalBooking:any
 adults=[1,2,3,4,5,6,7,8,9]
children=[0,1,2,3,4,5,6,7,8,9]
adult;
child;
hotelFilter:any
 
  constructor(private http:HttpClient, private activeRouter: ActivatedRoute,
    ) {  this.selected = {
      startDate: dayjs(),
      endDate: dayjs()
    }}

  ngOnInit() {
    this.picker = this.pickerDirective.picker;

    this.filterJson=null
    this.http.get('../../../assets/places.json').subscribe(data=>{
    this.dataEntry=data
     console.log(data)

    this.activeRouter.params.subscribe(id=>{
    this.id=+id.id
    console.log(this.id)
    this.filterJson=this.dataEntry.filter(id=>id.id===this.id)
    this.finalBooking=this.filterJson[0].id
  console.log(this.finalBooking)
   })
  
 })
 console.log(this.filterJson)
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
 
 
}
