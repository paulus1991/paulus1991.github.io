import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{fader} from './route-animation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    fader
  ]
})
export class AppComponent {
  title = 'EasyBook';
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
