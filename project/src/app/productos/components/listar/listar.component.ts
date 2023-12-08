import { Component } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';
import { FormBuilder} from '@angular/forms';
import { producto } from '../../pages/producto/producto';
import { ActualizarComponent } from '../actualizar/actualizar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {

  
  constructor(private productoHttp :ProductoServiceService, private fb : FormBuilder,private route:Router){}

  producto : producto = {id:0,title:"",price:0,description:"",category:{id:0,name:"",image:""},images:[]};
  form = this.fb.group({
    id: ['']
  })
  submit(){
    const formData = this.form.value; 
    if(formData.id != ""){
        this.productoHttp.getOne(this.form.value.id!).subscribe((res : any)=>{
          console.log (res.data)
          this.producto = res.data[0];
        },
        (error)=>{
          console.log(error)
          alert("Error al Buscar el producto")
        });
    }else{
      alert ("Debes ingresar un id para realizar la busqueda")
    }
    
  }
   actualizar: ActualizarComponent | undefined;

  actualiza(){
    if(this.producto.id != 0){
      this.route.navigate(['./producto/actualizar',this.producto]);
    }else
    alert("Debes buscar el producto que deseas editar")
  }
  eliminar(){
    if(this.producto.id != 0){
      this.route.navigate(['./producto/eliminar',this.producto]);
    }else
    alert("Debes buscar el productos que deseas eliminar")
  }
}
