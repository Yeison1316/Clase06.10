import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("hola");
    let cloneReq = request;
    cloneReq = request.clone({
      setHeaders : {
        Authorization : "Bearer "+localStorage.getItem("token_auth")!
      }
    })

    return next.handle(cloneReq);
  }
}
