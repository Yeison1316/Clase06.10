import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
  postProducto(){
    
  }
  putProducto(){

  }
  deleteProducto(){

  }
  getCategory(){
    return this.http.get(`${environment.uri}/categories`);
  }
}
