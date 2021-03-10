import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.css']
})
export class OutroComponent implements OnInit {

  @Input()
  imageResults = {}

  @Input()
  wordResults = {}

  constructor() { }

  ngOnInit() {
  }

}
