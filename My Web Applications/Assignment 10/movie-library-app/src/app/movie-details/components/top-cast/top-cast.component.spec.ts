import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCastComponent } from './top-cast.component';

describe('TopCastComponent', () => {
  let component: TopCastComponent;
  let fixture: ComponentFixture<TopCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
