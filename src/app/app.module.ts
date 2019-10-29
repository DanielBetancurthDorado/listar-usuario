import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {UsuarioModule} from './usuario/usuario.module';
import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,UsuarioModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] // Conque componente empieza la app
})
export class AppModule { }
