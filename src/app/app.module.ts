import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DemoAppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormHomeComponent } from './forms/components/form-home.component';
import { FormExample1Component } from './forms/components/form-example1/form-example1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormHomeComponent,
    FormExample1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DemoAppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
