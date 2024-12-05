import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl: string = environment.apiUrl
  commentSupportUrl :string = '/api/support/tickets';
  constructor(
    private _http : HttpClient
  ) { }


  getAll(token:string, idTicket: number){
    let httpUrl = this.apiUrl+`${this.commentSupportUrl}/${idTicket}/comments`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl, { headers });
  }
  create(token:string,idTicket:number, data:any){
    let httpUrl = this.apiUrl+`${this.commentSupportUrl}/${idTicket}/comments`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post<any>(httpUrl, data, { headers });
  }




}
