import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  PRE_WORDS_REVIEW_ID = 5;
  WORDS_REVIEW_ID = 6;
  IMAGES_REVIEW_ID = 7;
  OUTRO_ID = 8;

  currentId = this.INTRO_ID;

  user: User = new User();

  words = ["LAMPE",
    "TISSUE",
    "NICHE",
    "BOÎTE",
    "NUAGE",
    "TUILE",
    "PORTE",
    "MICRO",
    "SAUCE",
    "STYLO"
  ];
  noiseWords = [
    "LACET",
    "GRAIN",
    "TABLE",
    "ÉVIER",
    "ARBRE",
    "CADRE"
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
