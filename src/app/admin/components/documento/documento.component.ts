import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Documento, DocumentoDTO } from 'src/app/models/Documento';
import { Nivel } from 'src/app/models/Nivel';
import { Institucion } from 'src/app/models/Institucion';
import * as M from 'materialize-css';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})

export class DocumentoComponent implements OnInit {
  
  readonly pagename: string = "Gestión de Documentos";
  readonly componentUrl: string = "documento/";
  readonly nivelUrl: string = "nivel/";
  readonly institucionUrl: string = "institucion/";

  niveles: Nivel[];
  instituciones: Institucion[];
  documentos: any[];
  documento: DocumentoDTO;
  editMode: boolean = false;

  constructor(private genericService: GenericService) {
    this.documento = new DocumentoDTO("","","","");
   }


  jquery_code(){
    M.AutoInit();
  }

  ngOnInit() {
    this.jquery_code();
    this.getDocumentos();
    this.getNiveles();
    this.getInstituciones();
  }

  getDocumentos(){
    this.genericService.getAll(this.componentUrl, (documentos) => {
      this.documentos = documentos;
    });
  }

  getNiveles(){
    this.genericService.getAll(this.nivelUrl, (niveles) => {
      this.niveles = niveles;
    });
  }

  getInstituciones(){
    this.genericService.getAll(this.institucionUrl, (instituciones) => {
      this.instituciones = instituciones;
    });
  }

  crearDocumento(){
    this.genericService.crear(this.componentUrl, this.documento, () => {
      this.documento = new DocumentoDTO("","","","");
      this.getDocumentos();
    });
    
  }

  borrarDocumento(id: string){
    Swal.fire({
      title: 'Desea Realizar esta operacion?',
      text: "Al Borrar este fiche producira Cambios irreversible",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
      this.genericService.borrar(this.componentUrl, id, () => {
      this.getDocumentos();
    });
    }
 })
}

  traerDocumento(id: string){
    this.genericService.getById(this.componentUrl, id, (documento) => {
      this.documento = documento;
      this.getInstituciones();
      this.getNiveles();
      this.editMode = true;
    });
  }

  actualizarDocumento(id: string, documento: Partial<DocumentoDTO>){
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
          this.genericService.actualizar(this.componentUrl, id, documento, () => {
          this.documento = new DocumentoDTO("","","","");
          this.editMode = false;
          this.getDocumentos();
        });
      }
    })
}
}

