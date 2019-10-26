import { Component, OnInit } from '@angular/core';
import { Estados } from 'src/app/models/Enum';
import { GenericService } from 'src/app/shared/services/generic-service';
import * as M from 'materialize-css';
import { Solicitud } from 'src/app/models/Solicitud';
import Swal from 'sweetalert2';
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
  newEstado: any;

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
      this.editMode = !this.editMode;
      this.solicitudAEditar = solicitud;
      console.log(this.solicitudAEditar);
    })
   }
   actualizarSolicitud(solicitudId: string){
    Swal.fire({
      title: 'Desea Realizar esta operacion?',
      text: "Al actulaizar producira Cambios en el Fichero ",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
    this.genericService.actualizar(this.componentUrl, solicitudId, {estado: this.solicitudAEditar.estado}, () => {
      console.log(this.solicitudAEditar);
      this.editMode = false;
      this.getSolicitudes();
    });
  }
})
}
}