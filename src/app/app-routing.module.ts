import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostuladosComponent } from './postulados/postulados.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'postulados', component: PostuladosComponent}
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
