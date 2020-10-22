import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuarioListComponent},
  {path: 'create-usuario', component: CreateUsuarioComponent},
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }