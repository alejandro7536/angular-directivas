import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

const routes: Routes = [
  {
    path: 'usuarios/:id',
    component: UsuarioComponent,
    children: [
      {path: 'nuevo', component: UsuarioNuevoComponent},
      {path: 'editar', component: UsuarioEditarComponent},
      {path: 'detalle', component: UsuarioDetalleComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}
