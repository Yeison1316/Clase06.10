import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { CrearComponent } from './components/crear/crear.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ListarComponent } from './components/listar/listar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ActualizarComponent,
    CrearComponent,
    EliminarComponent,
    ListarComponent,
    ProductoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
