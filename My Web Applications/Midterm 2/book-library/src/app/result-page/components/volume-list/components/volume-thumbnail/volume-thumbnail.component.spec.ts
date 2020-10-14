import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeThumbnailComponent } from './volume-thumbnail.component';

describe('VolumeThumbnailComponent', () => {
  let component: VolumeThumbnailComponent;
  let fixture: ComponentFixture<VolumeThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
