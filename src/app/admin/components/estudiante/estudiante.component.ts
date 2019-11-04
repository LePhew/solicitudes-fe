import { Component, OnInit } from '@angular/core';

import { Nivel } from 'src/app/models/Nivel';
import { Institucion } from 'src/app/models/Institucion';

import * as M from 'materialize-css';
import Swal from 'sweetalert2';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  readonly pagename: string = "Solicitudes"
  readonly componentUrl: string = "estudiante/";
  readonly nivelUrl: string = "nivel/";
  readonly institucionUrl: string = "institucion/";

  niveles: Nivel[];
  instituciones: Institucion[];
  estudiantes: Estudiante[];
  estudiante: Estudiante;
  
  constructor(
    private genericService: GenericService
  ) {
      this.estudiante = new Estudiante("","","","",null,null,"");
   }

  ngOnInit() {
    M.AutoInit();
    this.getNiveles();
    this.getInstituciones();
    this.getEstudiantes();
  }

  getEstudiantes(){
    this.genericService.getAll(this.componentUrl, (estudiantes) => {
      this.estudiantes = estudiantes;
    })
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
  

}
