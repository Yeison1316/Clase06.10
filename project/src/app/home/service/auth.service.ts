import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  baseUrl = "";

  getToken(form : any){
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login',form);
  }
  getusuario(){
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile')
  }
}
