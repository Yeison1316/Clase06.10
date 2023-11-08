import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';
import { category } from '../../category';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { titleValidator, descriptionValidator, priceValidator, imagesValidator } from '../Validators/product-form.validators';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{

  form : FormGroup;

  constructor(private productoHttp :ProductoServiceService,  private fb : FormBuilder){
    this.form = this.fb.group({
      title : ["",[titleValidator]],
      categoryId :0,
      price : [0,[priceValidator]],
      description: ["",[descriptionValidator]],
      images : ["",[imagesValidator]]
    })
  }
  Cate : category[ ] = [ ] 
  ngOnInit(): void {
    this.productoHttp.getCategory().subscribe((res :any) => {
      this.Cate = res;
    })
  }
  
  submit(){
    const formData = this.form.value;
      formData.categoryId = parseInt(formData.categoryId);
      formData.images = [formData.images];
      console.log(formData)
      this.productoHttp.postProducto(formData).subscribe(data =>{
        console.log(data)
      },
      (error)=>{
        alert("Error al Crear el producto")
      });
  }
  }
  

