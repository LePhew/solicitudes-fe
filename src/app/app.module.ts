import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { EnumPipe } from '../app/models/Pipes';
import { NgxMaskModule } from 'ngx-mask';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { NivelComponent } from './admin/components/nivel/nivel.component';
import { DocumentoComponent } from './admin/components/documento/documento.component';
import { InstitucionComponent } from './admin/components/institucion/institucion.component';
import { EstudianteComponent } from './admin/components/estudiante/estudiante.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { HistorialSolicitudComponent } from './components/historial-solicitud/historial-solicitud.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GenericService } from './shared/services/generic-service';
import { HomeComponent } from './admin/components/home/home.component';
import { SolicitudAdminComponent } from './admin/components/solicitud-admin/solicitud-admin.component';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './shared/filter/filter.component';
import { NuevoEstudianteComponent } from './components/nuevoestudiante/nuevoestudiante.component';
import { NotificacionesComponent } from './shared/notificaciones/notificaciones.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NivelComponent,
    DocumentoComponent,
    InstitucionComponent,
    EstudianteComponent,
    SolicitudComponent,
    HistorialSolicitudComponent,
    NavbarComponent,
    HomeComponent,
    SolicitudAdminComponent,
    EnumPipe,
    LoginComponent,
    FilterComponent,
    NuevoEstudianteComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxMaskModule.forRoot()
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
