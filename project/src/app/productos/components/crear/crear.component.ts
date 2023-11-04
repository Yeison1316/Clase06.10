import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../producto-service.service';
import { category } from '../../category';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{

  constructor(private productoHttp :ProductoServiceService){}
  categorys : category = {id:0,name:"",image:""};

  ngOnInit(): void {
    this.productoHttp.getCategory().subscribe((res :any) => {
      this.categorys = res;
      console.log(this.categorys);
    })
  }
  }
  

