import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../shared/services/generic-service'; 
import { Nivel } from 'src/app/models/Nivel';
import { Institucion } from 'src/app/models/Institucion';
import { Estudiante }  from 'src/app/models/Estudiante';
import * as M from 'materialize-css';

@Component({
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.component.html',
  styleUrls: ['./nuevoestudiante.component.css']
})
export class NuevoEstudianteComponent implements OnInit {

  private readonly pagename = "Creación de nuevo Estudiante";
  readonly nivelUrl: string = "nivel/";
  readonly institucionUrl: string = "institucion/";

  niveles: Nivel[];
  instituciones: Institucion[];
  estudiante: Estudiante;

  constructor(private genericService: GenericService) {
      this.estudiante = new Estudiante("","","",null,null,"");
   }
  
  ngOnInit() {
    M.AutoInit();
    this.getInstituciones();
    this.getNiveles();
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
