import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
// import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KindhouseComponent } from './kindhouse/kindhouse.component';
import { AbouthomeComponent } from './abouthome/abouthome.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },  // Default route (root)
  { path: 'home', component: HomeComponent }, // Explicit home route
  { path: 'kind-house', component: KindhouseComponent }, // Explicit Kind House route
  { path: 'about-house', component: AbouthomeComponent }, // Explicit About House route
  { path: 'full-details', component: FulldetailsComponent }, // Explicit Full Details route
  { path: 'send-message', component: SendmessageComponent }, // Explicit Send Message route
];
