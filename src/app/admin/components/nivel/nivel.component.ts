import { Component, OnInit, ViewChild } from '@angular/core';
import { NivelDTO } from 'src/app/models/Nivel';
import { GenericService } from 'src/app/shared/services/generic-service';
import { FormGroup } from '@angular/forms';

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
  receivedValue: string;

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

  filtrar(criteria: string){
    this.receivedValue = criteria;
  }

  borrarNivel(id: string){
    this.genericService.borrar(this.componentUrl, id, () => {
      this.getNiveles();
    });
  }

  traerNivel(id: string){
    this.genericService.getById(this.componentUrl, id, (nivel) => {
      this.nivel = nivel;
      this.editMode = true;
    });
  }

  actualizarNivel(id: string, nivel: Partial<NivelDTO>){
    this.genericService.actualizar(this.componentUrl, id, nivel, () => {
      this.nivel = new NivelDTO("","",null);
      this.editMode = false;
      this.getNiveles();
    })
  }

}
