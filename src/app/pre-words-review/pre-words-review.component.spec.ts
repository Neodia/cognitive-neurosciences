import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreWordsReviewComponent } from './pre-words-review.component';

describe('PreWordsReviewComponent', () => {
  let component: PreWordsReviewComponent;
  let fixture: ComponentFixture<PreWordsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreWordsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreWordsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
