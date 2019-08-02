import { Nivel } from './Nivel';
import { Institucion } from './Institucion';

export class Estudiante {
    
    constructor(
    public nombres: string,
    public apellidos: string,
    public matricula: string,
    public nivel: Nivel,
    public institucion: Institucion,
    public estado: string
    ){}
}