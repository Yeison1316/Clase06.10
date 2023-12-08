import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';
import { producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  productos:producto[] = [];
  constructor (private productoHttp :ProductoServiceService){}
  ngOnInit(){
    this.productoHttp.getAll().subscribe((res:any)=>{
      this.productos = res.data;
    })   
  }

}
