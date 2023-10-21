import { Component } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {

  constructor(private productoHttp :ProductoServiceService){}

  click(){
    
  }
}
