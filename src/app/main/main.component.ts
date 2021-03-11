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
  noiseWords = [
    "Lacet",
    "Grain",
    "Table",
    "Évier",
    "Arbre",
    "Cadre"
  ];
  images = []
  imagesDemo = [
    "d1.jpg",
    "d2.jpg",
    "d3.jpg"
  ];

  NB_IMAGES = 10

  usedItems = {};
  wordResults = {};
  imageResults = {};

  constructor(private cdRef : ChangeDetectorRef) {
    this.images = Array.from(Array( this.NB_IMAGES ).keys()).map( k => (k+1) + ".jpg" )
  }

  ngOnInit() {
  }

  next() {
    this.currentId++;
  }

  testEnd(usedItems) {
    this.next();
    this.usedItems = usedItems;
  }

  wordsReviewEnd(results) {
    this.next();
    this.wordResults = results;
  }

  imageReviewEnd(results) {
    this.next()
    this.imageResults = results;

    console.log("END");
    console.log(this.user);
    console.log(this.usedItems);
    console.log(this.wordResults);
    console.log(this.imageResults);
  }

  updateImages(images) {
    this.images = images;
    this.cdRef.detectChanges();
  }


}
