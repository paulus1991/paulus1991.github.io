import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './routes/user/user.component';
import { HomeComponent } from './routes/home/home.component';
import { PickerComponent } from './components/picker/picker.component';
import {FormsModule} from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select';
import {CommonModule} from '@angular/common'
import{ReactiveFormsModule} from '@angular/forms'
import { ContactComponent } from './routes/contact/contact.component';
import { SigninComponent } from './shared/signin/signin.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CarouselComponent } from './components/carousel/carousel.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgsRevealModule} from 'ngx-scrollreveal';
 import { ListingsResultsComponent } from './routes/listings-results/listings-results.component';
import { ListingIdComponent } from './routes/listing-id/listing-id.component';
 import {HttpClientModule} from '@angular/common/http';
import { MapsComponent } from './components/maps/maps.component'
import { AgmCoreModule } from '@agm/core';
import { ClientPaymentComponent } from './routes/client-payment/client-payment.component';
import { ThankYouComponent } from './routes/thank-you/thank-you.component';
import { OrderModule } from 'ngx-order-pipe';
import { PasswordResetComponent } from './routes/password-reset/password-reset.component';
import { ResetModalComponent } from './components/reset-modal/reset-modal.component';
 import { HelpComponent } from './routes/help/help.component';
import { BookingStatusComponent } from './routes/booking-status/booking-status.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { NewsComponent } from './routes/news/news.component';
import { CareersComponent } from './routes/careers/careers.component';
import { PrivacyPolicyComponent } from './routes/privacy-policy/privacy-policy.component';
import { TermsComponent } from './routes/terms/terms.component';
import { SiteMapComponent } from './routes/site-map/site-map.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    PickerComponent,
    ContactComponent,
    SigninComponent,
    CarouselComponent,
     ListingsResultsComponent,
     ListingIdComponent,
     MapsComponent,
     ClientPaymentComponent,
     ThankYouComponent,
     PasswordResetComponent,
     ResetModalComponent,
      HelpComponent,
     BookingStatusComponent,
     AboutUsComponent,
     NewsComponent,
     CareersComponent,
     PrivacyPolicyComponent,
     TermsComponent,
     SiteMapComponent,
      
  ],
  imports: [
    FormsModule,
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgsRevealModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC_PsnzosFoGN7LMHdifvKs-H24Nz4MU_Y'
    }),
    OrderModule,
    Ng2SearchPipeModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
