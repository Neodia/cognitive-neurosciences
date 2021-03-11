import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pre-words-review',
  templateUrl: './pre-words-review.component.html',
  styleUrls: ['./pre-words-review.component.css']
})
export class PreWordsReviewComponent implements OnInit {

  @Output()
  next = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nextClick() { this.next.emit(); }
  
}
