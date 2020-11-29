import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * Constructor
   * @param authService todo:
   */
  constructor(private authService: AuthService) { }

  /**
   * Intercepts a requests before sending it to the server
   * @param req todo:
   * @param next todo:
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.setHeaders(req));
  }

  /**
   * Include authorization headers in the request
   * @param req todo:
   */
  setHeaders(req: HttpRequest<any>) {
    if (!req.headers.has('Authorization')) {
      req = req.clone({
        setHeaders: { Authorization: this.authService.getToken() },
      });
    }
    return req;
  }


}