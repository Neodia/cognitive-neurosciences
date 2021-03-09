import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-words-defiler',
  templateUrl: './words-defiler.component.html',
  styleUrls: ['./words-defiler.component.css']
})
export class WordsDefilerComponent implements OnInit {

  @Input()
  words = [];

  @Input()
  images = [];
  workingImages = [];

  @Output()
  updateImages = new EventEmitter<Object>();

  itemsArray = [];

  @Output()
  onEnd = new EventEmitter<Object>();

  items = {
    left : "",
    right: ""
  }

  timer = "";

  positions = {
    "Word" : [],
    "Image" : []
  };

  constructor() { }

  ngOnInit() {
    this.start();
  }

  start() {
    this.words = this.shuffle(this.words);
    this.images = this.shuffle(this.images);
    this.workingImages = this.images.slice();
    this.updateImages.emit(this.images);

    // Merges the images and the words.
    this.words.forEach(w => this.itemsArray.push({ val: w, type: "Word" }));
    this.workingImages.forEach(i => this.itemsArray.push({ val: i, type: "Image" }));
    this.itemsArray = this.shuffle(this.itemsArray);

    // Allows the same amount of images and words to be shown on each side.
    this.itemsArray.slice(0, (this.itemsArray.length / 4) + (this.itemsArray.length % 4 > 0 ? 1 : 0) ).forEach(i => {
      this.positions["Word"].push( "left" );
      this.positions["Word"].push( "right" );
      this.positions["Image"].push( "left" );
      this.positions["Image"].push( "right" );
    });
    this.positions["Word"]  = this.shuffle(this.positions["Word"]);
    this.positions["Image"] = this.shuffle(this.positions["Image"]);

    console.log(this.positions["Word"]);
    console.log(this.positions["Image"]);

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

  showItems() { // TO DO : Show same amount in left than right
    if(this.itemsArray.length > 0) {
      let tmpItem = this.itemsArray.pop();
      let randomPos = this.positions[tmpItem.type].pop();
  
      this.items[randomPos] = tmpItem;
      setTimeout( () => {
        this.items[randomPos] = "";
        setTimeout( () => this.showItems(), 2000 );
      }, 150);
    } else
      this.end();
  }

  end() {
    this.onEnd.emit({ words : this.words, images : this.workingImages });
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

}
