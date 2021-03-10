import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-images-review',
  templateUrl: './images-review.component.html',
  styleUrls: ['./images-review.component.css']
})
export class ImagesReviewComponent implements OnInit {

  @Output()
  onEnd = new EventEmitter<Object>();

  @Input()
  images = []

  items = []

  selectedImage = null;

  selectedImages = []
  correct = 0;
  wrong = 0;

  constructor() { }

  ngOnInit() {
    this.images = this.shuffle( this.images );
    this.showNextImage();
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

  showNextImage() {
    if(this.images.length > 0) {
      var image = this.images.pop();
      var imageId = image.split(".")[0];

      this.items.push("test/" + image);
      this.items.push(imageId + "/1.jpg");
      this.items.push(imageId + "/2.jpg");
      this.items.push(imageId + "/3.jpg");

      this.items = this.shuffle( this.items );
    } else {
      this.onEnd.emit({
        selectedImages : this.selectedImages,
        correct : this.correct,
        wrong : this.wrong
      })
    }
  }

  selectImage() {
    this.items = [];
    if(this.selectedImage.includes("test")) 
      this.correct++;
    else this.wrong++;
    this.selectedImages.push(this.selectedImage);

    this.selectedImage = null;
    this.showNextImage();
  }

}
