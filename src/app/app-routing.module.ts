import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './routes/contact/contact.component';
import { HomeComponent } from './routes/home/home.component';
 import { LoginComponent } from './shared/login/login.component';
import { SigninComponent } from './shared/signin/signin.component';
import { ListingsResultsComponent } from './routes/listings-results/listings-results.component';
import { ListingIdComponent } from './routes/listing-id/listing-id.component';
import { ClientPaymentComponent } from './routes/client-payment/client-payment.component';
import { ThankYouComponent } from './routes/thank-you/thank-you.component';
import { PasswordResetComponent } from './routes/password-reset/password-reset.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { BookingStatusComponent } from './routes/booking-status/booking-status.component';
import { CareersComponent } from './routes/careers/careers.component';
import { HelpComponent } from './routes/help/help.component';
import { NewsComponent } from './routes/news/news.component';
import { PrivacyPolicyComponent } from './routes/privacy-policy/privacy-policy.component';
import { SiteMapComponent } from './routes/site-map/site-map.component';
import { TermsComponent } from './routes/terms/terms.component';
const routes: Routes = [
  {path:'',component:HomeComponent,data:{animation:'isRight'}},
  {path:'contact',component:ContactComponent,data:{animation:'isLeft'}},
  {path:'login',component:LoginComponent,data:{animation:'isRight'}},
  {path:'signin',component:SigninComponent,data:{animation:'isRight'}},
  {path:'listings-results',component: ListingsResultsComponent ,data:{animation:'isRight'}},
  {path:'listing-id/:id',component:ListingIdComponent,data:{animation:'isRight'}},
  {path:'payment/:id',component:ClientPaymentComponent, data:{animation:'isRight'}},
  {path:'thank-you',component:ThankYouComponent, data :{animation:'isLeft'}},
  {path:'forgot-password',component:PasswordResetComponent, data :{animation:'isLeft'}},
  {path:'about-us',component:AboutUsComponent, data :{animation :'isLeft'}},
  {path:'booking-status',component:BookingStatusComponent, data :{animation :'isLeft'}},
  {path:'careers',component:CareersComponent, data: {animation :'isLeft'}},
  {path:'help',component:HelpComponent,data :{animation :'isLeft'}},
  {path:'news',component:NewsComponent,data:{animation :'isLeft'}},
  {path:'privacy-policy',component:PrivacyPolicyComponent,data:{animation:'isLeft'}},
  {path:'site-map', component:SiteMapComponent, data :{animation :'isLeft'}},
  {path:'terms',component:TermsComponent,data:{animation:'isLeft'}},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
