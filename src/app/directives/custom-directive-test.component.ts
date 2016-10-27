import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fau-custom-directive-test',
  templateUrl: './custom-directive-test.component.html',
  styles: []
})
export class CustomDirectiveTestComponent implements OnInit {

  items: string[];

  constructor() { }

  ngOnInit() {
    this.items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
