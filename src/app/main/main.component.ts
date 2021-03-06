import { Component, OnInit } from '@angular/core';

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

  currentId = 1;

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.currentId++;
  }


}