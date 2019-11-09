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
  

  @Input() pagename : string;
  isAdminPage: boolean;
  
  constructor(private genericService: GenericService, private _router: Router) { }

  ngOnInit() {
    this.checkIfAdminPage();
    M.AutoInit();
  }

  checkIfAdminPage(){
    if(window.location.href.toLowerCase().includes("/admin")){
      this.isAdminPage = true;
    }
  }

  navigateHome(){
    this._router.navigate(['/']);
  }
}
