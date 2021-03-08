import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDefilerComponent } from './image-defiler.component';

describe('ImageDefilerComponent', () => {
  let component: ImageDefilerComponent;
  let fixture: ComponentFixture<ImageDefilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDefilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDefilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
