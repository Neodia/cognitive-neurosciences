import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  INTRO_ID = 1;
  USER_INFO_ID = 2;
  TEST_EXPLANATION_ID = 3;
  TEST_ID = 4;
  OUTRO_ID = 5;

  currentId = this.INTRO_ID;

  user: User = new User();

  words = ["Lampe",
    "Tissu",
    "Niche",
    "Boîte",
    "Nuage",
    "Tuile",
    "Porte",
    "Micro",
    "Sauce",
    "Stylo"
  ];
  images = []

  NB_IMAGES = 64

  constructor() {
    this.images = Array.from(Array( this.NB_IMAGES ).keys()).map( k => k + ".jpg" )
  }

  ngOnInit() {
  }

  next() {
    this.currentId++;
    console.log(this.user);
  }


}
