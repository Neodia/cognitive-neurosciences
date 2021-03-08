import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-explanation',
  templateUrl: './test-explanation.component.html',
  styleUrls: ['./test-explanation.component.css']
})
export class TestExplanationComponent implements OnInit {

  @Output()
  goToTest = new EventEmitter();

  INTRO_ID = 1;
  DEMO_ID = 2;
  OUTRO_ID = 3;

  currentId = 1;

  words = [ "Bamboo", "Loup", "Fromage", "Voiture", "Poupée", "Mug" ];
  workingWords = null;

  constructor() { 
  }

  ngOnInit() {
    
  }

  shuffle(arr) {
    var array = arr.slice();
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

  showOutro() {
    this.currentId = this.OUTRO_ID;
  }

  startDemo() {
    this.workingWords = this.shuffle(this.words);
    this.currentId = this.DEMO_ID;
  }

  startOver() {
    this.currentId = this.INTRO_ID;
  }

  nextClick() {
    this.goToTest.emit();
  }
}
