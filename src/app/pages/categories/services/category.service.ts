import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { Category } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = environment.apiUrl
  categoryUrl :string = '/api/categories';

  constructor(
    private _http : HttpClient
  ) { }

  getAll(token:string){
    let httpUrl = this.apiUrl+this.categoryUrl;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get<any>(httpUrl, { headers });
  }

  newCategory(token:string){
    let httpUrl = this.apiUrl+this.categoryUrl;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post<any>(httpUrl, {}, { headers });
  }

  editCategory(){

  }

  deleteCategory(){

  }


}
