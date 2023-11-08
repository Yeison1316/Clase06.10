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

  baseUrl = `${environment.uri}/products`;

  getAll(){
    return this.http.get(this.baseUrl);
  }
  getOne(id: string){
    return this.http.get(`${environment.uri}/products/`+id);
  }
  postProducto(form:FormGroup){
    return this.http.post<Response>(`${environment.uri}/products/`,form);

  }
  putProducto(id:string,form:producto){
    return this.http.put<Response>(`${environment.uri}/products/`+id,form);
  }
  deleteProducto(id:string){
    return this.http.delete(`${environment.uri}/products/`+id);
  }
  getCategory(){
    return this.http.get(`${environment.uri}/categories`);
  }
}
