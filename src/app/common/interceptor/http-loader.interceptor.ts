import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/Spinner.service';


@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show(); // Mostrar spinner al iniciar la solicitud

    return next.handle(req).pipe(
      finalize(() => this.spinnerService.hide()) // Ocultar spinner al completar la solicitud
    );
  }
}
