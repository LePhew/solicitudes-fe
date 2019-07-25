import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Solicitud } from 'src/app/models/Solicitud';
declare var $:any;
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  readonly pagename: string = "Nueva solicitud"
  readonly componentUrl: string = "solicitud/";
  readonly estudianteUrl: string = "estudiante/";
  readonly documentoUrl: string = "documento/";

  documentos: any;
  estudiante: Estudiante;
  solicitudes: any;
  editMode: boolean = false;
  documentosSeleccionados: Array<any> = [];

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
    this.genericService.getById(this.estudianteUrl, "4132070a-ff74-42aa-8c32-8f0b7d613229", (estudiante) => {
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

  agregarASolicitud(documento: any){
    this.documentosSeleccionados.push(documento);
    console.log(this.documentosSeleccionados);
  }

  removerDocumento(documento:any){
    let index = this.documentosSeleccionados.indexOf(documento);
    this.documentosSeleccionados.splice(index, 1);
  }

  enviarSolicitud(estudianteId: string, documentosSeleccionados: any){
    let solicitud = new Solicitud(estudianteId, documentosSeleccionados);
    this.genericService.crear(this.componentUrl, solicitud, () => {
      this.documentosSeleccionados = [];
    })
  }

}
