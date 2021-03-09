import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../user';

import { Speech } from 'speak-tts' // es6

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
  WORDS_REVIEW_ID = 5;
  IMAGES_REVIEW_ID = 6;
  OUTRO_ID = 7;

  currentId = this.IMAGES_REVIEW_ID;

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

  NB_IMAGES = 10

  usedItems = {};

  constructor(private cdRef : ChangeDetectorRef) {
    this.images = Array.from(Array( this.NB_IMAGES ).keys()).map( k => (k+1) + ".jpg" )
  }

  ngOnInit() {
  }

  next() {
    this.currentId++;
    console.log(this.user);
  }

  testEnd(usedItems) {
    this.next();
    this.usedItems = usedItems;
  }

  updateImages(images) {
    this.images = images;
    this.cdRef.detectChanges();
  }


}
