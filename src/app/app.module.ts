import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


// Material
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { IntroComponent } from './intro/intro.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    UserInfoComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    // Material
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
