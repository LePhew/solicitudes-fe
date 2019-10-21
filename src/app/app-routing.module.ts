import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentoComponent } from './admin/components/documento/documento.component';
import { InstitucionComponent } from './admin/components/institucion/institucion.component';
import { HomeComponent } from './admin/components/home/home.component';
import { NivelComponent } from './admin/components/nivel/nivel.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { HistorialSolicitudComponent } from './components/historial-solicitud/historial-solicitud.component';
import { SolicitudAdminComponent } from './admin/components/solicitud-admin/solicitud-admin.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoEstudianteComponent } from './components/nuevoestudiante/nuevoestudiante.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'solicitudes', component: SolicitudComponent},
  {path: 'historial', component: HistorialSolicitudComponent},
  {path: 'admin', component: HomeComponent},
  {path: 'admin/documento', component: DocumentoComponent},
  {path: 'admin/institucion', component: InstitucionComponent},
  {path: 'admin/nivel', component: NivelComponent},
  {path: 'admin/solicitud', component: SolicitudAdminComponent},
  {path: 'nuevo', component: NuevoEstudianteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
