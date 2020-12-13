import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbCellMarkdownComponent } from './nb-cell-markdown.component';

describe('NbCellMarkdownComponent', () => {
  let component: NbCellMarkdownComponent;
  let fixture: ComponentFixture<NbCellMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbCellMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbCellMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
