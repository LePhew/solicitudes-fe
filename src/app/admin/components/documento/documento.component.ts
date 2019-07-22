import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Documento, DocumentoDTO } from 'src/app/models/Documento';
import { Nivel } from 'src/app/models/Nivel';
import { Institucion } from 'src/app/models/Institucion';
declare var $:any;


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

  documentos: any[];
  documento: DocumentoDTO;
  niveles: Nivel[];
  instituciones: Institucion[];
  editMode: boolean = false;

  constructor(private genericService: GenericService) {
    this.documento = new DocumentoDTO("","","","");
   }


  jquery_code(){
    $(document).ready(function(){
      $('select').formSelect();
    });
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  ngOnInit() {
    this.jquery_code();
    this.getNiveles();
    this.getInstituciones();
    this.getDocumentos();
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
      this.getDocumentos();
    });
    
  }

  borrarDocumento(id: string){
    this.genericService.borrar(this.componentUrl, id, () => {
      this.getDocumentos();
    });
  }

  traerDocumento(id: string){
    this.genericService.getById(this.componentUrl, id, (documento) => {
      this.documento = documento;
      this.editMode = true;
      console.log(this.documento);
    });
  }

  actualizarDocumento(id: string, documento: Partial<DocumentoDTO>){
    this.genericService.actualizar(this.componentUrl, id, documento, () => {
      this.documento = new DocumentoDTO("","","","");
      this.editMode = false;
      this.getDocumentos();
    })
  }

  



}
