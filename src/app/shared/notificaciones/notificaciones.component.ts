import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service';
import { Router } from '@angular/router';

import * as M from 'materialize-css';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  readonly componentUrl: string = "notificaciones/";

  notificaciones: Array<any>;
  notificacionesCount: number;
  
  constructor(private genericService: GenericService, private _router: Router) { }

  ngOnInit() {
    this.getNotificaciones();
    M.AutoInit();
  }

  fillDropDown(){
    this.notificaciones.forEach((item: any, index: number) => {
        let dropdown = document.getElementById('dropdown2');
        let li = document.createElement('li');
        li.classList.add('collection-item');
        li.addEventListener('click', () => {
          this.notificacionesCount -= this.notificacionesCount;
          this.marcarVistas();
          this._router.navigate(['/admin/solicitud']);
        })
        li.appendChild(document.createTextNode(item.mensaje));
        dropdown.appendChild(li);
    })
  }

  getNotificaciones(){
    this.genericService.getAll(this.componentUrl, (notificaciones: any) => {
      this.notificacionesCount = notificaciones.length;
      this.notificaciones = notificaciones;
      if(notificaciones.length > 0){
        this.fillDropDown();
      }
    })
    
  }

  marcarVistas(){
    this.genericService.notificacionVista(this.componentUrl+"vistas", () => {
      this.getNotificaciones();
    })
  }

}
