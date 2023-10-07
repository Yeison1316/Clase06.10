import { Component } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  constructor (private productoHttp :ProductoServiceService){}
  ngOnInit(){
    this.productoHttp.getAll().subscribe((res:any)=>{
      console.log(res);
    })   
  }

}
