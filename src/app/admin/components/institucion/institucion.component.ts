import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Institucion, InstitucionDTO } from 'src/app/models/Institucion';
declare var $:any;

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.css']
})
export class InstitucionComponent implements OnInit {

  readonly pagename: string = "Gestión de Instituciones";
  readonly componentUrl: string = "institucion/";
  
  instituciones: any[];
  institucion: InstitucionDTO;
  editMode: boolean = false;
  
  constructor(private genericService: GenericService) {
    this.institucion = new InstitucionDTO("","");
   }

  ngOnInit() {
    this.getInstituciones();
  }

  getInstituciones(){
    this.genericService.getAll(this.componentUrl, (instituciones) => {
      this.instituciones = instituciones;
    });
  }
  crearInstitucion(){
    this.genericService.crear(this.componentUrl, this.institucion, () => {
      this.getInstituciones();
    });
    
  }

  borrarInstitucion(id: string){
    this.genericService.borrar(this.componentUrl, id, () => {
      this.getInstituciones();
    });
  }

  traerInstitucion(id: string){
    this.genericService.getById(this.componentUrl, id, (institucion) => {
      this.institucion = institucion;
      this.editMode = true;
      console.log(this.institucion);
    });
  }

  actualizarInstitucion(id: string, institucion: Partial<InstitucionDTO>){
    this.genericService.actualizar(this.componentUrl, id, institucion, () => {
      this.institucion = new InstitucionDTO("","");
      this.editMode = false;
      this.getInstituciones();
    })
  }

}
