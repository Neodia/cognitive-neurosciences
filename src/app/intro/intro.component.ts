import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Output()
  goToUserInfo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nextClick() { this.goToUserInfo.emit(); }

}
