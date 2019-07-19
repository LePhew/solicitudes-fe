import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {


  pagename: string = "Gestión de Documentos";
  
  constructor() { }


  jquery_code(){
    $(document).ready(function(){
      $('select').material_select();
    });
  }

  ngOnInit() {
    this.jquery_code();
  }

}
