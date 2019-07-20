import { Nivel } from './Nivel';

export class Estudiante {
    
    constructor(
    public nombres: string,
    public apellidos: string,
    public matricula: string,
    public nivel: Nivel,
    public estado: string
    ){}
}