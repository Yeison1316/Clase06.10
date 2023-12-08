import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { producto } from './pages/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.uri}producto`;

  getAll(){
    return this.http.get(this.baseUrl);
  }
  getOne(id: string){
    return this.http.get(`${environment.uri}producto/`+id);
  }
  postProducto(form:FormGroup){
    return this.http.post<Response>(`${environment.uri}producto/`,form);

  }
  putProducto(id:string,form:producto){
    return this.http.put<Response>(`${environment.uri}producto/`+id,form);
  }
  deleteProducto(id:string){
    return this.http.delete(`${environment.uri}producto/`+id);
  }
  getCategory(){
    return this.http.get(`${environment.uri}categories`);
  }
}
