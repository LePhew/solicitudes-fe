import { Component, OnInit } from '@angular/core';
import { Estados } from 'src/app/models/Enum';
import { GenericService } from 'src/app/shared/services/generic-service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-solicitud-admin',
  templateUrl: './solicitud-admin.component.html',
  styleUrls: ['./solicitud-admin.component.css']
})
export class SolicitudAdminComponent implements OnInit {

  readonly pagename: string = "Gestión de solicitudes";
  readonly componentUrl: string = "solicitud/";

  solicitudes: any;
  solicitud: any;
  documentosSolicitados: any;
  solicitudAEditar: any;

  estado = Estados;
  editMode = false;

  constructor(private genericService: GenericService) { }

  ngOnInit() {
    this.getSolicitudes();
    M.AutoInit();
  }

  getSolicitudes(){
    this.genericService.getAll(this.componentUrl, (solicitudes) => {
      this.solicitudes = solicitudes;
    })
  }

  showDocumento(documentos: any){
    this.documentosSolicitados = documentos;
    console.log(this.documentosSolicitados);
    var elem = document.querySelector('.modal');
    var modal = M.Modal.getInstance(elem);
   
    modal.open();
   }

   traerSolicitud(solicitudId: string){
    this.genericService.getById(this.componentUrl, solicitudId, (solicitud) => {
      this.editMode = true;
      this.solicitudAEditar = solicitud;
      console.log(this.solicitudAEditar);
    })
   }
}
