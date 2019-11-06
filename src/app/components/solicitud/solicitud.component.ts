import { Component, OnInit} from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Solicitud, SolicitudDTO } from 'src/app/models/Solicitud';
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
  
  matricula: string = localStorage.getItem('matricula');
  documentos: any;
  estudiante: Estudiante;
  solicitudes: any;
  editMode: boolean = false;
  documentosSeleccionados: Array<any> = [];

  constructor(private genericService: GenericService) {
      
    }

  ngOnInit() {
      this.getEstudiante();
      this.getDocumentos();
      this.jquery_code();
      
  }

  jquery_code(){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  getEstudiante(){
    this.genericService.getByMat(this.estudianteUrl+"bymat/", this.matricula, (estudiante) => {
      this.estudiante = estudiante;
      this.editMode = false;
    });
  }

  getDocumentos(){
    let data = {
      institucionId: localStorage.getItem('institucionId'),
      nivelId: localStorage.getItem('nivelId')
    }
    this.genericService.getEstudianteDocs(this.documentoUrl+"withparam/estudiante",data, (documentos) => {
      /*if(documentos.length < 1){
        this.documentos = null;
      }
      else{
        this.documentos = documentos;
      }
    });*/
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
    let solicitud = new SolicitudDTO(estudianteId, documentosSeleccionados);
    this.genericService.crear(this.componentUrl, solicitud, () => {
      this.documentosSeleccionados = [];
    })
  }

}
