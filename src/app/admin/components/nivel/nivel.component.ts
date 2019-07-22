import { Component, OnInit } from '@angular/core';
import { NivelDTO } from 'src/app/models/Nivel';
import { GenericService } from 'src/app/shared/services/generic-service';

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
  
  constructor(private genericService: GenericService) {
    this.nivel = new NivelDTO("","",0);
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
      this.getNiveles();
    });
    
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
      console.log(this.nivel);
    });
  }

  actualizarNivel(id: string, nivel: Partial<NivelDTO>){
    this.genericService.actualizar(this.componentUrl, id, nivel, () => {
      this.nivel = new NivelDTO("","",0);
      this.editMode = false;
      this.getNiveles();
    })
  }

}
