import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExplanationComponent } from './test-explanation.component';

describe('TestExplanationComponent', () => {
  let component: TestExplanationComponent;
  let fixture: ComponentFixture<TestExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
