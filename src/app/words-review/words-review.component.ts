import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-words-review',
  templateUrl: './words-review.component.html',
  styleUrls: ['./words-review.component.css']
})
export class WordsReviewComponent implements OnInit {
  
  @Output()
  onEnd = new EventEmitter<Object>();

  @Input()
  correctWords = [];

  @Input()
  noiseWords = [];

  totalWords = [];
  currentWord = null;

  answers = [];
  correct = 0;
  wrong = 0;

  constructor() { 
  }

  ngOnInit() {
    this.totalWords.push.apply(this.totalWords, this.correctWords.map(w => { return { word: w, type: "Correct"} }) );
    this.totalWords.push.apply(this.totalWords, this.noiseWords.map(w => { return { word: w, type: "Noise"} }) );
    this.totalWords = this.shuffle( this.totalWords );

    this.nextWord();
    console.log(this.totalWords);
  }

  acceptWord() {
    this.incrementCounter(this.currentWord, "Correct");
    this.nextWord();
  }

  rejectWord() {
    this.incrementCounter(this.currentWord, "Noise");
    this.nextWord();
  }

  incrementCounter(word, condition) {
    this.answers.push( {
      word : word.word,
      type : word.type,
      answer : condition
    } );
    
    if(word.type == condition)
      this.correct++;
    else
      this.wrong++;
  }

  nextWord() {
    if(this.totalWords.length > 0)
      this.currentWord = this.totalWords.pop();
    else
      this.onEnd.emit(
        {
          answers : this.answers,
          correct : this.correct,
          wrong : this.wrong
        }
      );
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
