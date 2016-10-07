import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DemoAppRoutingModule} from './app-routing.module';
import {SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormHomeComponent } from './forms/form-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DemoAppRoutingModule,
    SimpleNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
