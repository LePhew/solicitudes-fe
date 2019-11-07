import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GenericService } from '../services/generic-service';
import * as M from 'materialize-css';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  readonly notificacionesUrl: string = 'notificaciones/';

  @Input() pagename : string;
  isAdminPage: boolean;
  
  notificacionesCount: number;
  notificaciones: any;
  
  constructor(private genericService: GenericService, private _router: Router) { }

  ngOnInit() {
    if(window.location.href.toLowerCase().includes("/admin")){
      this.isAdminPage = true;
    }
    this.getNotificaciones();
    M.AutoInit();
  }

  getNotificaciones(){
    this.genericService.getAll(this.notificacionesUrl, (notificaciones) => {
      this.notificacionesCount = notificaciones.length;
      this.notificaciones = notificaciones;
    })
  }

  navigateHome(){
    this._router.navigate(['/']);
  }
}
