import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tuto } from '../tuto.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  GOOGLE_SERVICE_ACCOUNT_EMAIL = "cognitive-neurosciences@cool-arch-269912.iam.gserviceaccount.com";
  GOOGLE_PRIVATE_KEY = "AIzaSyAhH6fAgVisMYJeYzwGkKashAIPfr39d28";


  constructor(private db: DataService) { 
  }

  ngOnInit() {
  }

  onClick = () => {
    let tuto = new Tuto();
    tuto.key = "MyKey";
    tuto.title = "MyTitle";

    this.db.create( tuto );
  }

}


class MyTest {
  name: string

  constructor(name : string) { this.name = name; }
}