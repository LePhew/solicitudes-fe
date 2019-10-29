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
      title: "Está seguro de que quiere borrar este registro?",
      text: "Esta acción es irreversible",
      showCancelButton:true,
      confirmButtonText: "Sí",
      cancelButtonText:"Cancelar",
      type: "warning"
    }).then(() => {
      this.genericService.borrar(this.componentUrl, id, () => {
        this.getInstituciones();
      });
    })
  }

  traerInstitucion(id: string){
    this.genericService.getById(this.componentUrl, id, (institucion) => {
      this.institucion = institucion;
      this.editMode = true;
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
