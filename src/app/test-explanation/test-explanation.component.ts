import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-explanation',
  templateUrl: './test-explanation.component.html',
  styleUrls: ['./test-explanation.component.css']
})
export class TestExplanationComponent implements OnInit {

  @Output()
  goToTest = new EventEmitter();

  @Input()
  images = [];

  INTRO_ID = 1;
  DEMO_ID = 2;
  OUTRO_ID = 3;

  currentId = 1;

  words = [ "Bamboo", "Loup", "Fromage" /*, "Voiture", "Poupée", "Mug"*/ ];

  constructor() {}

  ngOnInit() {}

  showOutro() {
    this.currentId = this.OUTRO_ID;
  }

  startDemo() {
    this.currentId = this.DEMO_ID;
  }

  startOver() {
    this.currentId = this.INTRO_ID;
  }

  nextClick() {
    this.goToTest.emit();
  }
}
