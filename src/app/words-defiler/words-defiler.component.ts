import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-words-defiler',
  templateUrl: './words-defiler.component.html',
  styleUrls: ['./words-defiler.component.css']
})
export class WordsDefilerComponent implements OnInit {

  @Input()
  workingWords = [];

  @Output()
  onEnd = new EventEmitter();

  items = {
    left : "",
    right: ""
  }

  timer = "";

  constructor() { }

  ngOnInit() {
    this.start();
  }

  start() {
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

  showItems() {
    if(this.workingWords.length > 0) {
      let position = ["left", "right"];
      let randomPosIndex = Math.floor(Math.random() * position.length);;
      let randomPos = position[randomPosIndex];
  
      this.items[randomPos] = this.workingWords.pop();
      setTimeout( () => {
        this.items[randomPos] = "";
        setTimeout( () => this.showItems(), 2000 );
      }, 150);
    } else
      this.end();
  }

  end() {
    this.onEnd.emit();
  }

}
