import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

// angular mterial module
import { MaterialModule } from './shared/material.module';
import { AboutComponent } from './about/about.component';
import { PopUpComponent } from './pop-up/pop-up.component';

// carousel used in popup component 
import {IvyCarouselModule} from 'angular-responsive-carousel';
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AmplifyUIAngularModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [PopUpComponent]
})
export class AppModule { }
