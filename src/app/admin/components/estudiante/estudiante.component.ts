import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  readonly pagename: string = "Solicitudes"

  constructor() { }

  ngOnInit() {
  }

  

}
