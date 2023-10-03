import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, delay, finalize, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _loaderService : LoaderService) { }
  private unsubscribeAll$ : Subject<void> = new Subject<void>()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.loadingStatus.next(true)

    const authRequest = req.clone()

    return next.handle(authRequest)
      .pipe(
        takeUntil(this.unsubscribeAll$),
        delay(2000),
        finalize(() => {
          this._loaderService.loadingStatus.next(false)
        })
      )

  }

  unsubscribeAll() :void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
