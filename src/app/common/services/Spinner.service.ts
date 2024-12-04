import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'; // O usa tu lógica personalizada

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private requestCount = 0;

  constructor(private spinner: NgxSpinnerService) {}

  show() {
    this.requestCount++;
    if (this.requestCount === 1) {
      this.spinner.show(); // Mostrar spinner
    }
  }

  hide() {
    this.requestCount--;
    if (this.requestCount === 0) {
      this.spinner.hide(); // Ocultar spinner
    }
  }
}
