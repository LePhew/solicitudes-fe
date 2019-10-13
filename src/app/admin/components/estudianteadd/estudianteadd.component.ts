import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Estudiante,EstudianteDTO } from 'src/app/models/Estudiante';
import { Nivel } from 'src/app/models/Nivel';
import { Institucion } from 'src/app/models/Institucion';
import * as M from 'materialize-css';

@Component({
  selector: 'app-estudianteadd',
  templateUrl: './estudianteadd.component.html',
  styleUrls: ['./estudianteadd.component.css']
})
export class EstudianteaddComponent implements OnInit {
  readonly pagename: string = "Listado de Estudiantes";
  readonly componentUrl: string = "estudiante/";
  readonly nivelUrl: string = "nivel/";
  readonly institucionUrl: string = "institucion/";

  niveles: Nivel[];
  instituciones: Institucion[];
  estudiantes: any[];
  estudiante: EstudianteDTO;
  editMode: boolean = false;
  constructor(private genericService: GenericService) {
    this.estudiante = new EstudianteDTO("","","","","","","");
   }
   jquery_code(){
    M.AutoInit();
  }
  ngOnInit() {
    this.jquery_code();
    this.getEstudiantes();
    this.getNiveles();
    this.getInstituciones();
  }
  getEstudiantes(){
    this.genericService.getAll(this.componentUrl, (estudiantes) => {
      this.estudiantes = estudiantes;
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
  AñadirEstudiante(){
    this.genericService.crear(this.componentUrl, this.estudiante, () => {
      this.estudiante = new EstudianteDTO("","","","","","","");
      this.getEstudiantes();
    });
    
  }
  traerEstudiante(id: string){
    this.genericService.getById(this.componentUrl, id, (estudiante) => {
      this.estudiante = estudiante;
      this.getInstituciones();
      this.getNiveles();
      this.editMode = true;
    });
  }

  actualizarEstudiante(id: string, documento: Partial<EstudianteDTO>){
    this.genericService.actualizar(this.componentUrl, id, this.estudiante, () => {
      this.estudiante= new EstudianteDTO("","","","","","","");
      this.editMode = false;
      this.getEstudiantes();
    })
  }

}
