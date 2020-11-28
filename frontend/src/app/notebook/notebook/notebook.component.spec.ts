import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { NotebookInterface } from '../notebook.models';
import { NotebookComponent } from './notebook.component';

fdescribe('NotebookComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;

  const notebooks: NotebookInterface = {
    name: 'Notebook1'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookComponent ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with null value', () => {
    expect(component).toBeTruthy();
  });
});
