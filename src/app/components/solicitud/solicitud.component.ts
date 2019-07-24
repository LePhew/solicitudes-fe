import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { GenericService } from 'src/app/shared/services/generic-service';
declare var $:any;
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  readonly pagename: string = "Hacer una solicitud"
  readonly componentUrl: string = "solicitud/";
  readonly estudianteUrl: string = "estudiante/";
  readonly documentoUrl: string = "documento/";

  documentos: any;
  estudiante: Estudiante;
  solicitudes: any;
  editMode: boolean = false;

  constructor(private genericService: GenericService) {
      this.estudiante = new Estudiante("","","",null,"");
   }

  ngOnInit() {
    this.getEstudiante();
    this.getDocumentos();
    this.getSolicitudes();
    this.jquery_code();
  }

  jquery_code(){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
  getEstudiante(){
    this.genericService.getById(this.estudianteUrl, "1a8c96d6-d3d7-48a1-951c-2d6a935d0cb6", (estudiante) => {
      console.log(estudiante);
      this.estudiante = estudiante;
      this.editMode = true;
    });
  }

  getDocumentos(){
    this.genericService.getAll(this.documentoUrl, (documentos) => {
      this.documentos = documentos;
    });
  }

  getSolicitudes(){
    this.genericService.getAll(this.componentUrl, (solicitudes) => {
      this.solicitudes = solicitudes;
    })
  }

}
