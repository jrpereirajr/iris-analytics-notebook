import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private translate: TranslateService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();

    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

}
