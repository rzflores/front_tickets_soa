import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiUrl: string = environment.apiUrl
  departmentUrl :string = '/api/departments';

  constructor(
    private _http : HttpClient
  ) { }

  getAll(token:string){
    let httpUrl = this.apiUrl+this.departmentUrl;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl, { headers });
  }

  newDepartment(token:string){
    let httpUrl = this.apiUrl+this.departmentUrl;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post<any>(httpUrl, {}, { headers });
  }

  editDepartment(){

  }

  deleteDepartment(token: string , idItem:string){
    let httpUrl = this.apiUrl+this.departmentUrl+`/${idItem}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.delete<any>(httpUrl, { headers });

  }


}
