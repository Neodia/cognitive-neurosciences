import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { MatCardModule } from '@angular/material/card'; 

// Material
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatIconModule } from '@angular/material/icon'; 

import { MainComponent } from './main/main.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { IntroComponent } from './intro/intro.component'; 
import { FormsModule } from '@angular/forms';
import { WordsDefilerComponent } from './words-defiler/words-defiler.component';
import { TestExplanationComponent } from './test-explanation/test-explanation.component';
import { ImagesReviewComponent } from './images-review/images-review.component';
import { OutroComponent } from './outro/outro.component';
import { WordsReviewComponent } from './words-review/words-review.component';
import { PreWordsReviewComponent } from './pre-words-review/pre-words-review.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    UserInfoComponent,
    IntroComponent,
    WordsDefilerComponent,
    TestExplanationComponent,
    ImagesReviewComponent,
    OutroComponent,
    WordsReviewComponent,
    PreWordsReviewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    // Material
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
