import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-review',
  templateUrl: './images-review.component.html',
  styleUrls: ['./images-review.component.css']
})
export class ImagesReviewComponent implements OnInit {

  @Input()
  images = []

  items = []

  constructor() { }

  ngOnInit() {
    this.items.push("test/" + this.images[0]);
    this.items.push(this.images[0].split(".")[0] + "/1.jpg");
    this.items.push(this.images[0].split(".")[0] + "/2.jpg");
    this.items.push(this.images[0].split(".")[0] + "/3.jpg");
  }

}
