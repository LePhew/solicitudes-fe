import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../../shared/services/generic-service';
import { Documento, DocumentoDTO } from '../../../models/Documento';
import { Nivel } from '../../../models/Nivel';
import { Institucion } from '../../../models/Institucion';
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
  editMode: any = {};

  constructor(private genericService: GenericService) {
    this.documento = new DocumentoDTO("", "", "", "");
  }


  jquery_code() {
    M.AutoInit();
  }

  ngOnInit() {
    this.jquery_code();
    this.getDocumentos();
    this.getNiveles();
    this.getInstituciones();
  }

  getDocumentos() {
    this.genericService.getAll(this.componentUrl, (documentos) => {
      this.documentos = documentos;
    });
  }

  getNiveles() {
    this.genericService.getAll(this.nivelUrl, (niveles) => {
      this.niveles = niveles;
    });
  }

  getInstituciones() {
    this.genericService.getAll(this.institucionUrl, (instituciones) => {
      this.instituciones = instituciones;
    });
  }

  crearDocumento() {
    this.genericService.crear(this.componentUrl, this.documento, () => {
      this.documento = new DocumentoDTO("", "", "", "");
      this.getDocumentos();
    });
  }

  borrarDocumento(id: string) {

    this.genericService.borrar(this.componentUrl, id, () => {
      this.getDocumentos();
    });

  }

  traerDocumento(id: string) {
    //   this.genericService.getById(this.componentUrl, id, (documento) => {
    //     this.documento = documento;
    //     this.getInstituciones();
    //     this.getNiveles();
    //     this.editMode = true;
    //   });
    let item: Documento[] = this.documentos.filter(doc => doc.id === id);
    this.editMode = {
      id: id,
      edit: true
    }
    this.documento = new DocumentoDTO(item[0].nombre, item[0].descripcion, item[0].nivel.id, item[0].institucion.id);
  }

  actualizarDocumento(documento: Partial<DocumentoDTO>) {
    const docToSend = {
      "nombre": documento.nombre,
      "descripcion": documento.descripcion,
      "nivelId": documento.nivelId,
      "institucionId": documento.institucionId
    }
    this.genericService.actualizar(this.componentUrl, this.editMode.id, docToSend, () => {
      this.documento = new DocumentoDTO("", "", "", "");
      this.editMode.edit = false;
      this.getDocumentos();
    })
  }





}
