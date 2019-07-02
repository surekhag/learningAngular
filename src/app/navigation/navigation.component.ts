import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  showDate(){
    alert("Todays Date : "+ new Date().toISOString().slice(0, 10));
  };

  hero = "test";

  heroes = HEROES;


  constructor() {

   }

  ngOnInit() {

  }

}
