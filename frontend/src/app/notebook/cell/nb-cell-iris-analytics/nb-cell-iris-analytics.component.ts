import { AfterViewInit, Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { NbCellComponent } from '../nb-cell/nb-cell.component';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NbCellIrisAnalyticsComponent),
  multi: true,
};

@Component({
  selector: 'app-nb-cell-iris-analytics',
  templateUrl: './nb-cell-iris-analytics.component.html',
  styleUrls: ['./nb-cell-iris-analytics.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class NbCellIrisAnalyticsComponent extends NbCellComponent implements OnInit {

  @ViewChild('iframe', { static: false })
  public iframe: ElementRef;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getIFrame(): Observable<ElementRef> {
    return Observable.create((observer) => {
      const interlvaId = setInterval(() => {
        if (this.iframe) {
          clearInterval(interlvaId);
          observer.next(this.iframe);
          observer.complete();
        }
      }, 100);
    });
  }

  writeValue(obj: any): void {
    super.writeValue(obj);
    this.getIFrame().subscribe(iframe => {
      iframe.nativeElement.src = this._value.content;
    });
  }

  onSourceCtrlEnter(event: KeyboardEvent) {
    super.onSourceCtrlEnter(event);
    this.getIFrame().subscribe(iframe => {
      iframe.nativeElement.src = this._value.content;
    });
  }

}
