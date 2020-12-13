import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbCellComponent } from './nb-cell.component';

describe('NbCellComponent', () => {
  let component: NbCellComponent;
  let fixture: ComponentFixture<NbCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
