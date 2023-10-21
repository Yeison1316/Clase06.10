import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { CrearComponent } from './components/crear/crear.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ListarComponent } from './components/listar/listar.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path: '' , component : ProductoComponent},
  {path: 'crear' , component : CrearComponent},
  {path: 'actualizar' , component : ActualizarComponent},
  {path: 'eliminar' , component : EliminarComponent},
  {path: 'listar' , component : ListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
