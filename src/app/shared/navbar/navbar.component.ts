import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() pagename : string;
  isAdminPage: boolean;

  
  constructor() { }

  ngOnInit() {
    if(window.location.href.toLowerCase().includes("/admin")){
      this.isAdminPage = true;
    }
  }

}
