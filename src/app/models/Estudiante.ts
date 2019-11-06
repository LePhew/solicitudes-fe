import { Nivel } from './Nivel';
import { Institucion } from './Institucion';

export class Estudiante {
    
    constructor(
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

export interface EstudianteDTO {

    nombres: string,
    apellidos: string,
    cedula: string,
    contrasena: string,
    institucionId: string,
    nivelId: string
}
