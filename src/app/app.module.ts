import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DemoAppRoutingModule} from './app-routing.module';
import {SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormHomeComponent } from './forms/components/form-home.component';
import { FormExample1Component } from './forms/components/form-example1/form-example1.component';
import { RouterExample1Component } from './routers/example1/router-example1.component';
import { RoutingExample1AboutComponent } from './routers/example1/routing-example1-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormHomeComponent,
    FormExample1Component,
    RouterExample1Component,
    RoutingExample1AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DemoAppRoutingModule,
    SimpleNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
