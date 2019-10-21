import { Component, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly pagename:string = "Sistema de Solicitudes";
  readonly componentUrl: string = "estudiante/";

  matricula: string = "";

  constructor(private genericService: GenericService, private _router: Router) { }

  ngOnInit() {
  }


  login(){
    this.genericService.getByMat(this.componentUrl+"bymat/", this.matricula, (estudiante) => {
      if(estudiante){
        localStorage.setItem('matricula', estudiante.matricula);
        localStorage.setItem('nivelId', estudiante.nivel.id);
        localStorage.setItem('institucionId', estudiante.institucion.id);
        this._router.navigate(['/solicitudes']);
      }
      else{
        
        Swal.fire({
          title: 'Deseas crear un perfil estudiantil  ?',
          text: "Si le das a la opción aceptar podar hacer un perfil estudiantil ",
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText:'Cancelar'
        }).then((result) => {
          if (result.value) {
            this._router.navigate(['/nuevo'])
          }
        })
      }
      
    })
  }

}
