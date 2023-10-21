import { Component } from '@angular/core';
import { ChatService } from '../../chat.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {

  constructor(private chat : ChatService){}

  click(){
    this.chat.set("Mensaje enviado");
  }
}
