import { Component, OnInit,ViewChild } from '@angular/core';
import * as dayjs from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from '../../../../node_modules/ngx-daterangepicker-material';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {
  selected: {startDate: dayjs.Moment, endDate: dayjs.Moment};
  @ViewChild(DaterangepickerDirective, { static: true }) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  rooms=[1,2,3,4]
adults=[1,2,3,4,5,6,7,8,9]
children=[0,1,2,3,4,5,6,7,8,9]
start;
end
  room;
adult;
child;
results;



  constructor() {   this.selected = {
    startDate: dayjs(),
    endDate: dayjs()
  },
  this.start=this.selected.startDate
  this.end=this.selected.endDate}

  ngOnInit() {
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
onSubmit(){
  let first=parseInt(this.end+this.start )
  console.log(first)
    

}

}
