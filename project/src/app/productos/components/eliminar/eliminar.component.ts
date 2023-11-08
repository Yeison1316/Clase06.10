import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from '../../pages/producto/producto';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{
  id! : string;
  constructor(private productoHttp :ProductoServiceService,private Aroute:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    this.Aroute.params.subscribe(params =>{
      this.id = params['id'];
    })
  }
  
  eliminar(){
    this.productoHttp.deleteProducto(this.id).subscribe(()=>{
        alert("Se elimino con exito el producto");
       this.route.navigate(['./producto/listar']);
    },
    (error)=>{
      alert("Error al eliminar el producto")
    }
    );
  }
}
