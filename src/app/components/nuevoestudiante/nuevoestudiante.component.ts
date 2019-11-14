import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GenericService } from '../../shared/services/generic-service'; 
import { Nivel } from '../../models/Nivel';
import { Institucion } from '../../models/Institucion';
import { Estudiante }  from '../../models/Estudiante';

import * as M from 'materialize-css';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.component.html',
  styleUrls: ['./nuevoestudiante.component.css']
})
export class NuevoEstudianteComponent implements OnInit {

  readonly pagename = "Creación de nuevo Estudiante";
  readonly nivelUrl: string = "nivel/";
  readonly institucionUrl: string = "institucion/";
  readonly estudianteUrl: string = "estudiante/";

  niveles: Nivel[];
  instituciones: Institucion[];
  estudiante: Estudiante;

  constructor(private genericService: GenericService, private _router: Router) {
    this.estudiante = new Estudiante('',"","","","","",null,null,"");
  }
  
  ngOnInit() {
    this.askForCed();
    this.getNiveles();
    this.getInstituciones(); 
    M.AutoInit();
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

  crearEstudiante(){
    this.genericService.crear(this.estudianteUrl, this.estudiante, () => {
      this._router.navigate(['/']);
    })
  }

  askForCed(){
    Swal.fire({
      title:"Ingresa tu cédula para continuar",
      input: "text",
      confirmButtonText: "Ok"
    })
    .then(response => {
      if(response.dismiss == Swal.DismissReason.esc){
        Swal.fire({
          title:"Ha decidido no ingresar cédula",
          text: "Será redirigido a la pantalla principal",
          type:"error"
        })
        .then(() => {
          this._router.navigate(['/']);
        })
      }
      else if(response.value == null){
        Swal.fire({
          title:"Ha decidido no ingresar cédula",
          text: "Será redirigido a la pantalla principal",
          type:"error"
        })
        .then(() => {
          this._router.navigate(['/']);
        })
      }
      else if(response.value.match('[0-9]{3}-[0-9]{7}-[0-9]')){
        this.estudiante.cedula = response.value;
      }
      
      else{
        Swal.fire({
          title:"Cédula inválida",
          text: "Favor verificar e intentar nuevamente",
          type:"error"
        }).then(() => {
          this.askForCed();
        })
      }
    })
  }

}
