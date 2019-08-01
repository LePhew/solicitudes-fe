import { Component, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventEmitter } from 'events';

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
        this._router.navigate(['/solicitudes']);
      }else{
        Swal.fire('Error', 'No se pudo encontrar tu matrícula', 'error');
      }
      
    })
  }

}
