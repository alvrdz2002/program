import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { PostuladosComponent } from './postulados/postulados.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConocenosComponent,
    FooterComponent,
    CategoriasComponent,
    LoginComponent,
    PostuladosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
