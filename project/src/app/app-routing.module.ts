import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '' , loadChildren : ()=>{return import("./home/home-routing.module").then(m => m.HomeRoutingModule)}},
  { path : 'producto' , canActivate: [authGuard],  loadChildren : ()=>{return import("./productos/productos.module").then(m => m.ProductosModule)}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
