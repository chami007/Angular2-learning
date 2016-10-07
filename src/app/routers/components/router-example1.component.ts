import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'fau-router-example1',
  templateUrl: './router-example1.component.html',
  styles: []
})
export class RouterExample1Component implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.dummyData();
  }

  dummyData() {
    this.users.push({ id: 1, name: 'Chris', username: 'chris1', avatar:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/108/1c0/0b45f46.jpg' });
    this.users.push({ id: 2, name: 'Adam', username: '541', avatar:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/0e3/0bc/2b4ce5e.jpg' });
    this.users.push({ id: 3, name: 'Michael', username: '7dde', avatar:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAR2AAAAJDJiODUxYWM1LTM1NzAtNGNiMy1iNTYxLTU4NDRkZTdlNDEyMg.jpg' });
    this.users.push({ id: 4, name: 'Sam', username: '5548', avatar:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/2a5/3da/2c4f000.jpg' });
    this.users.push({ id: 5, name: 'Ian', username: '007', avatar:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAPnAAAAJDZjYjFmZDY1LTUyN2YtNGJjYS1iYTBmLWZkNjg0YzM4ZDM4Yw.jpg' });
  }

  getUserDetail(user:User){
    console.log(user);
  }

}
