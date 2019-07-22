import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentoComponent } from './admin/components/documento/documento.component';
import { InstitucionComponent } from './admin/components/institucion/institucion.component';
import { HomeComponent } from './admin/components/home/home.component';


const routes: Routes = [
  {path: 'admin/documento', component: DocumentoComponent},
  {path: 'admin/institucion', component: InstitucionComponent},
  {path: 'admin', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
