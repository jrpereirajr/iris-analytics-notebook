import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbCellIrisAnalyticsComponent } from './nb-cell-iris-analytics.component';

describe('NbCellIrisAnalyticsComponent', () => {
  let component: NbCellIrisAnalyticsComponent;
  let fixture: ComponentFixture<NbCellIrisAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbCellIrisAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbCellIrisAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
