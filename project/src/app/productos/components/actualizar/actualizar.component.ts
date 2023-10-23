import { Component } from '@angular/core';
import { producto } from '../../pages/producto/producto';
import { ProductoServiceService } from '../../producto-service.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {

  constructor(private productoHttp :ProductoServiceService){}
}
