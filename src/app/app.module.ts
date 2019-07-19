import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { NivelComponent } from './admin/components/nivel/nivel.component';
import { DocumentoComponent } from './admin/components/documento/documento.component';
import { InstitucionComponent } from './admin/components/institucion/institucion.component';
import { EstudianteComponent } from './admin/components/estudiante/estudiante.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { HistorialSolicitudComponent } from './components/historial-solicitud/historial-solicitud.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NivelComponent,
    DocumentoComponent,
    InstitucionComponent,
    EstudianteComponent,
    SolicitudComponent,
    HistorialSolicitudComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
