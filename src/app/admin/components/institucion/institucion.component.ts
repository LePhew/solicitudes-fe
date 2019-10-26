import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';
import { Institucion, InstitucionDTO } from 'src/app/models/Institucion';
import Swal from 'sweetalert2';
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
      this.institucion = new InstitucionDTO("","");
      this.getInstituciones();
    });
    
  }

  borrarInstitucion(id: string){
    Swal.fire({
      title: 'Desea Realizar esta operacion?',
      text: "Al Borrar este fiche producira Cambios irreversible",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
    this.genericService.borrar(this.componentUrl, id, () => {
      this.getInstituciones();
});
}
})
}
  traerInstitucion(id: string){
    this.genericService.getById(this.componentUrl, id, (institucion) => {
      this.institucion = institucion;
      this.editMode = true;
    });
  }

  actualizarInstitucion(id: string, institucion: Partial<InstitucionDTO>){
    Swal.fire({
      title: 'Desea Realizar esta operacion?',
      text: "Al actulaizar producira Cambios en el Fichero ",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
    this.genericService.actualizar(this.componentUrl, id, institucion, () => {
      this.institucion = new InstitucionDTO("","");
      this.editMode = false;
      this.getInstituciones();
    });
  }
})
}
}


