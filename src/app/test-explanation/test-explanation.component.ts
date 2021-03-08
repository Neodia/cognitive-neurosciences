import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-explanation',
  templateUrl: './test-explanation.component.html',
  styleUrls: ['./test-explanation.component.css']
})
export class TestExplanationComponent implements OnInit {

  INTRO_ID = 1;
  DEMO_ID = 2;

  currentId = 2;
  timer = "";

  item = {
    left : "",
    right: ""
  }

  words = [ "Bamboo", "Loup", "Fromage", "Voiture", "Poupée", "Mug" ];
  workingWords = null;

  constructor() { 
    this.workingWords = this.shuffle(this.words);
  }

  ngOnInit() {
    this.timer = "3";

    
    setTimeout(() => {
      this.timer = "2";
      setTimeout(() => {
        this.timer = "1";
        setTimeout(() => {
          this.timer = "";
          this.showItems();
        }, 1000);
      }, 1000);
    }, 1000);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  showItems() {
    if(this.workingWords.length > 0) {
      let position = ["left", "right"];
      let randomPosIndex = Math.floor(Math.random() * position.length);;
      let randomPos = position[randomPosIndex];
  
      this.item[randomPos] = this.workingWords.pop();
      setTimeout( () => {
        this.item[randomPos] = "";
        setTimeout( () => this.showItems(), 2000 );
      }, 150);
    }
  }
}
