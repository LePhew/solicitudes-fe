import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GenericService } from '../services/generic-service';

import * as M from 'materialize-css';
import { NotificacionesService } from '../services/notificaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  readonly componentUrl: string = "notificaciones/";

  notificaciones: Array<any> = [];
  notificacionesCount: number = 0;

  constructor(private genericService: GenericService, private _router: Router, private notificacionesService: NotificacionesService) { }

  ngOnInit() {
    M.AutoInit();
    this.notificacionesService.solicitudCreada().subscribe((data) => {
      this.executeNotification();
    })
  }

  executeNotification() {
    Swal.mixin({
      toast: true,
      position: 'top-right',
      icon: 'info',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      title: 'Una nueva solicitud fue creada'
    }).fire();
    this.getNotificaciones();
  }
  fillDropDown() {
    let dropdown = document.getElementById('dropdown2');
    console.log(dropdown.childNodes.length);
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.firstChild);
    }
    console.log(dropdown.childNodes.length);
    if (this.notificacionesCount > 0 && this.notificaciones.length > 0) {
      console.log("Notificaciones: ", this.notificaciones.length);
      console.log("NotificacionesCount: ", this.notificacionesCount);
      this.notificaciones.forEach((item: any, index: number) => {
        let li = document.createElement('li');
        li.classList.add('collection-item');
        li.addEventListener('click', () => {
          this.notificacionesCount = 0;
          this.notificaciones = [];
          this.marcarVistas();
          this._router.navigate(['/admin/solicitud']);
        })
        li.appendChild(document.createTextNode(item.mensaje));
        dropdown.appendChild(li);
      })
    }
    else {
      let dropdown = document.getElementById('dropdown2');
      let li = document.createElement('li');
      li.classList.add('collection-item');
      li.appendChild(document.createTextNode("No hay solicitudes no vistas"));
      dropdown.appendChild(li);
    }
  }

  getNotificaciones() {
    this.genericService.getAll(this.componentUrl, (notificaciones: any) => {
      this.notificaciones = notificaciones;
      this.notificacionesCount = notificaciones.length;
    })

  }

  marcarVistas() {
    this.genericService.notificacionVista(this.componentUrl + "vistas", () => {
      // this.getNotificaciones();
    })
  }

}
