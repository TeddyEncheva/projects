import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReviewsComponent } from './full-reviews.component';

describe('FullReviewsComponent', () => {
  let component: FullReviewsComponent;
  let fixture: ComponentFixture<FullReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
