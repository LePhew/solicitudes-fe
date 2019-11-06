import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly pagename: string = "Administración";
  
  constructor(private _router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('isAdmin') !== 'true'){
      this.checkIfAdmin();
    }
  }

  checkIfAdmin(){
    Swal.fire({
      title:"Ingresa el código de admin para continuar",
      input: "text",
      confirmButtonText: "Ok"
    })
    .then(input => {
      if(input.value !== '4332'){
        Swal.fire("Error", "Código de administrador incorrecto", "error");
        this._router.navigate(['/']);
      }
      else {
        localStorage.setItem('isAdmin', 'true');
      }
    })
  }

}
