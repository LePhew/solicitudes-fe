import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Documento } from 'src/app/models/Documento';
declare var $:any;


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {
  
  readonly pagename: string = "Gestión de Documentos";
  readonly componentUrl: string = "documento/";

  documento: Documento;

  constructor(private genericService: GenericService) {
    this.documento = new Documento("","","");
   }


  jquery_code(){
    $(document).ready(function(){
      $('select').material_select();
    });
  }

  ngOnInit() {
    this.jquery_code();
  }


  crearDocument(){
    this.genericService.crear(this.componentUrl, this.documento);
  }
  



}
