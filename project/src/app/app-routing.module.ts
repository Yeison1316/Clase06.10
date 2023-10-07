import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home' , loadChildren : ()=>{return import("./home/home.module").then(m => m.HomeModule)}},
  {path: 'producto' , loadChildren : ()=>{return import("./productos/productos.module").then(p => p.ProductosModule)}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
