import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  mensaje : String [] = [];

  set(msg : string){
    this.mensaje.push(msg);
  }

  get(){
    return this.mensaje;
  }
}
