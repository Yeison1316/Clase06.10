import { Component, OnInit } from '@angular/core';
import { producto } from '../../pages/producto/producto';
import { ProductoServiceService } from '../../producto-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { category } from '../../category';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  form : FormGroup;
  datos! : producto;
  id!: string;
  constructor(private productoHttp :ProductoServiceService,private route:ActivatedRoute,private fb : FormBuilder,private router:Router){
    this.form = this.fb.group({
      title : "",
      categoryId :0,
      price : 0,
      description: "",
      images : [""]
    })
  }
  Cate : category [] =[];
  ngOnInit(): void {
    this.productoHttp.getCategory().subscribe((res :any) => {
      this.Cate = res;
    })
  this.route.params.subscribe(params =>{
    const date = params;
    const {title,categoryId,price,description,images} = params;
    this.form.patchValue({title,categoryId,price,description,images})
    this.datos = this.form.value;
    this.id = date['id'];
    
  })
  }
  submit(){
    const formData = this.form.value;
    formData.images = [formData.images];
    this.productoHttp.putProducto(this.id,formData).subscribe(data=>{
      alert("Producto actualizado");
      this.router.navigate(['./producto/listar']);
    },
    (error)=>{
      alert("Error al actualizar el producto")
    });
  }
}
