import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsReviewComponent } from './words-review.component';

describe('WordsReviewComponent', () => {
  let component: WordsReviewComponent;
  let fixture: ComponentFixture<WordsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
