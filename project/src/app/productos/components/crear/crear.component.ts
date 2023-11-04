import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';
import { category } from '../../category';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{

  form = new FormGroup({
    title : new FormControl(''),
    category : new FormControl(''),
    price : new FormControl(''),
    description : new FormControl(''),
    images : new FormControl('')
  })
  constructor(private productoHttp :ProductoServiceService,  private fb : FormBuilder){}
  Cate : category[ ] = [ ] 
  ngOnInit(): void {
    this.productoHttp.getCategory().subscribe((res :any) => {
      this.Cate = res;
    })
  }
  
  submit(){
    this.productoHttp.postProducto(this.form).subscribe(data =>{
      console.log(data)
    })
  }
  }
  

