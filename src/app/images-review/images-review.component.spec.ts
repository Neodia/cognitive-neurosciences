import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesReviewComponent } from './images-review.component';

describe('ImagesReviewComponent', () => {
  let component: ImagesReviewComponent;
  let fixture: ComponentFixture<ImagesReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
