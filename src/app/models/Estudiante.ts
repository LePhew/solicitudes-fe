import { Nivel } from './Nivel';
import { Institucion } from './Institucion';

export class Estudiante {
    
    constructor(
    public id: string,
    public nombres: string,
    public apellidos: string,
    public cedula: string,
    public contrasena: string,
    public matricula: string,
    public nivel: Nivel,
    public institucion: Institucion,
    public estado: string
    ){}
}

export class EstudianteDTO {

    public nombres: string = "";
    public apellidos: string = "";
    public cedula: string = "";
    public contrasena: string = "";
    public nivelId: string = "";
    public institucionId:string = "";
    public estado: string = "";
    
    constructor(){}


}
