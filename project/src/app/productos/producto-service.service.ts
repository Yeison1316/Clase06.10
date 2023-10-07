import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.escuelajs.co/api/v1/products";
  getAll(){
    return this.http.get(this.baseUrl);
  }
  getOne(){

  }
  postProducto(){

  }
  putProducto(){

  }
  deleteProducto(){

  }
}
