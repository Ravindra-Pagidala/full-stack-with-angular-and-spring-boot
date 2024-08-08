import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler)

  {
    let username='Nani';
    let password='nani123';
    let basicAuthHeaderString='Basic '+window.btoa(username +':'+password);

    request=request.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString   
        }
      }
    );
    console.log('Intercepted request:', request);
    return next.handle(request)
  }
}
