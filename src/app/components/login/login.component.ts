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

  cedula: string = "";
  password: string = "";

  constructor(private genericService: GenericService, private _router: Router) { }

  ngOnInit() {
  }


  login(){
    var params = { 
      cedula: this.cedula,
      contrasena: this.password
     }
    this.genericService.autenticar(this.componentUrl+"autenticar", params, (estudiante) => {
      if(estudiante){
        localStorage.setItem('matricula', estudiante.matricula);
        localStorage.setItem('cedula', estudiante.cedula);
        localStorage.setItem('nivelId', estudiante.nivel.id);
        localStorage.setItem('institucionId', estudiante.institucion.id);
        this._router.navigate(['/solicitudes']);
      }
      else{
        Swal.fire({
          title: "Usuario no encontrado",
          text: "Desea crear un nuevo usuario",
          type: "info",
          showCancelButton: true,
          cancelButtonText: "No",
          confirmButtonText: "Sí"
        }).then(response => {
          if(response.value){
            this._router.navigate(['/nuevo']);
          }
        })
        
      }
      
    })
  }

}
