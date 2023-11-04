import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { ProductosModule } from './productos/productos.module';

const routes: Routes = [
  {path: '' , loadChildren : ()=>{return import("./home/home.module").then(m => m.HomeModule)}},
  { path : 'producto' , canActivate: [authGuard],  loadChildren : ()=>{return import("./productos/productos.module").then(m => m.ProductosModule)}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
