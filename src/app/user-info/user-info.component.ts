import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  user : User;
  
  @Output()
  goToUserInfo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nextClick() { this.goToUserInfo.emit(); }
}
