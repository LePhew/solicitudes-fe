import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentoComponent } from './admin/components/documento/documento.component';
import { InstitucionComponent } from './admin/components/institucion/institucion.component';
import { HomeComponent } from './admin/components/home/home.component';
import { NivelComponent } from './admin/components/nivel/nivel.component';


const routes: Routes = [
  {path: 'admin', component: HomeComponent},
  {path: 'admin/documento', component: DocumentoComponent},
  {path: 'admin/institucion', component: InstitucionComponent},
  {path: 'admin/nivel', component: NivelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
