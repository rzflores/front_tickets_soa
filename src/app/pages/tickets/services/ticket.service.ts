import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  apiUrl: string = environment.apiUrl
  ticketSuportUrl :string = '/api/support/tickets';
  ticketUrl :string = '/api/tickets'
  constructor(
    private _http : HttpClient
  ) { }


  getAll(token:string){
    let httpUrl = this.apiUrl+`${this.ticketSuportUrl}?include=assigned_agent,category`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl, { headers });
  }
  getAllNotAsigned(token:string){
    let httpUrl = this.apiUrl+`${this.ticketUrl}?include=assigned_agent,category`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl, { headers });
  }
  delete(token:string,id:number){
    let httpUrl = this.apiUrl+`${this.ticketUrl}/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.delete<any>(httpUrl, { headers });
  }
  create(token:string,data:any){
    let httpUrl = this.apiUrl+`${this.ticketUrl}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post<any>(httpUrl, data, { headers });
  }

  showAgentAsigned(token:string,id:number){
    let httpUrl = this.apiUrl+`${this.ticketSuportUrl}/${id}?include=assigned_agent`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl, { headers });
  }


}
