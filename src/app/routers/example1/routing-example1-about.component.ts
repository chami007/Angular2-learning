import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'fau-routing-example1-about',
  templateUrl: './routing-example1-about.component.html',
  styles: []
})
export class RoutingExample1AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  username: string;

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
  }

}
