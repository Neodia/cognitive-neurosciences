import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDefilerComponent } from './words-defiler.component';

describe('WordsDefilerComponent', () => {
  let component: WordsDefilerComponent;
  let fixture: ComponentFixture<WordsDefilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsDefilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsDefilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
