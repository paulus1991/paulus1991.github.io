import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat = 44.241165702 ;
  lng =  28.620330852;
  constructor() { }

  ngOnInit(): void {
  }

}
