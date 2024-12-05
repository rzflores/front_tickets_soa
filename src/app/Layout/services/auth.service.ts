import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroment/enviroment';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl
  loginUrl :string = '/login';
  logoutUrl :string = '/login';
  userUrl : string = '/api/user'

  constructor(
    private _http : HttpClient
  ) { }

  login(data:any){
    let httpUrl = this.apiUrl+this.loginUrl;
    return this._http.post<any>(httpUrl , data).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          return throwError(() => new Error(error.message));
        } 
        return throwError(() => new Error(error.message));
      })
    );
  
  }

  logout(token:string){
    let httpUrl = this.apiUrl+this.logoutUrl;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post<any>(httpUrl, {}, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 204) {
          return throwError(() => new Error(error.message));
        } 
        return throwError(() => new Error(error.message));
      })
    );
  }

  getUserData(token:string){
    let httpUrl = this.apiUrl+this.userUrl;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl , { headers })
  }
}
