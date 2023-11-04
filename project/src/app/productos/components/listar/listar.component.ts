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

  
  constructor(private productoHttp :ProductoServiceService, private fb : FormBuilder){}

  producto : producto = {id:0,title:"",price:0,description:"",category:{id:0,name:"",image:""},images:[]};
  form = this.fb.group({
    id : ['']
  })
  submit(){
    this.productoHttp.getOne(this.form.value.id!).subscribe((res : any)=>{
      this.producto = res;
    })
  }

}
