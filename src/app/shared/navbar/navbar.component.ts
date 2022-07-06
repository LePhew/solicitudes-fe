import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { GenericService } from '../services/generic-service';
import * as M from 'materialize-css';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() pagename: string;
  isAdminPage: boolean;

  constructor(
    private genericService: GenericService,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.checkIfAdminPage();
    this.checkIfSolicitudesPage();
    M.AutoInit();
  }

  checkIfAdminPage() {
    if (window.location.href.toLowerCase().includes("/admin")) {
      this.isAdminPage = true;
    }
  }

  checkIfSolicitudesPage() {
    if (window.location.href.toLowerCase().includes("/solicitudes")) {
      this.pagename = "Solunified";
    }
  }

  navigateHome() {
    //something goes here that will prompt if you want to log off the app when hitting the home button.
    Swal.fire({
      title: 'Te vas?',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this._router.navigate(['/']);
      }
      else {
        this._router.navigate(['/solicitudes']);
      }
    })
  }
  goBack() {
    this._location.back();
  }
}
