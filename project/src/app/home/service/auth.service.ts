import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  baseUrl = "";

  getToken(form : any){
    return this.http.get(environment.uri+'auth',form);
  }
  getusuario(){
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile')
  }
}
