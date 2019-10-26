import { Component, OnInit, ViewChild } from '@angular/core';
import { NivelDTO } from 'src/app/models/Nivel';
import { GenericService } from 'src/app/shared/services/generic-service';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {

  readonly pagename: string = "Gestión de Niveles";
  readonly componentUrl: string = "nivel/";
  
  niveles: any[];
  nivel: NivelDTO;
  editMode: boolean = false;
  @ViewChild('formNivel',{static: false}) formNivel;
  
  constructor(private genericService: GenericService) {
    this.nivel = new NivelDTO("","",null);
   }

  ngOnInit() {
    this.getNiveles();
  }

  getNiveles(){
    this.genericService.getAll(this.componentUrl, (niveles) => {
      this.niveles = niveles;
    });
  }
  crearNivel(){
    this.genericService.crear(this.componentUrl, this.nivel, () => {
      this.nivel = new NivelDTO("","",null);
      this.getNiveles();
      this.formNivel.resetForm();
    });
    
  }

  borrarNivel(id: string){
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
      this.getNiveles();
    });
  }
})
}

  traerNivel(id: string){
    this.genericService.getById(this.componentUrl, id, (nivel) => {
      this.nivel = nivel;
      this.editMode = true;
    });
  }

  actualizarNivel(id: string, nivel: Partial<NivelDTO>){
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
    this.genericService.actualizar(this.componentUrl, id, nivel, () => {
      this.nivel = new NivelDTO("","",null);
      this.editMode = false;
      this.getNiveles();
    });
  }
})
}
}
