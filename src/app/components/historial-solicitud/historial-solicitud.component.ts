import { Component, OnInit } from '@angular/core';
import { Solicitud, SolicitudDTO } from 'src/app/models/Solicitud';
import { GenericService } from 'src/app/shared/services/generic-service';
import * as M from 'materialize-css';
import { Estados } from 'src/app/models/Enum';

declare var $:any;

@Component({
  selector: 'app-historial-solicitud',
  templateUrl: './historial-solicitud.component.html',
  styleUrls: ['./historial-solicitud.component.css']
})
export class HistorialSolicitudComponent implements OnInit {

  
  readonly solicitudesUrl: string = "solicitud/";
  readonly documentosUrl: string = "documento/";
  readonly estudianteUrl: string = "estudiante/";
  readonly pagename = "Historial de Solicitudes";

  readonly matricula = localStorage.getItem('matricula');
  
  solicitudes: SolicitudDTO[];
  documentosSolicitados: any;
  estado = Estados;
  estudiante: any;

  

  constructor(private genericService: GenericService) {
    this.solicitudes = [];
   }

  ngOnInit() {
    this.getEstudiante();
    M.AutoInit()
  }

  /* getSolicitudes(){
    this.genericService.getAll(this.solicitudesUrl, (solicitudes) => {
      this.solicitudes = solicitudes;
      console.log(this.solicitudes);
    })
  } */

  getEstudiante(){
    this.genericService.getByMat(this.estudianteUrl+"bymat/", this.matricula, (estudiante) => {
      this.estudiante = estudiante;
      this.solicitudes = estudiante.solicitudes;
    });
  }

  showDocumento(documentos: any){
   this.documentosSolicitados = documentos;
   console.log(this.documentosSolicitados);
   var elem = document.querySelector('.modal');
   var modal = M.Modal.getInstance(elem);
  
   modal.open();
  }
}
