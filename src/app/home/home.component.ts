import { Component, OnInit } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'fau-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private pushService: NotificationsService) { }

  ngOnInit() {
  }

  public options = {
    position: ["bottom", "right"],
    timeOut: 2000,
    lastOnBottom: true
  }

  clickMe(){
    this.pushService.success('My title', 'content here', this.options);
  }

}
