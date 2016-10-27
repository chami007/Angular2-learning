import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import * as jQuery from 'jquery';

@Component({
  selector: 'fau-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  constructor(private pushService: NotificationsService) { 
    console.log('constructor');
  }

  ngOnInit() {
console.log('ngOnInit');
  }

  ngOnChanges(){
console.log('ngOnChanges');
  }

  ngDoCheck(){
console.log('ngDoCheck');
  }

  ngAfterContentChecked(){
console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(){
console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(){
console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(){
console.log('ngAfterViewInit');
  }

  clickMe() {
      console.log(window.location.href);
  }

}
