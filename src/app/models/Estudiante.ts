import { Nivel } from './Nivel';
import { Institucion } from './Institucion';
export class EstudianteDTO{

    constructor(
        public nombres: string,
        public apellidos: string,
        public matricula: string,
        public cedula:string,
        public nivelId: string,
        public institucionId: string,
        public estado: string
    ){}
    
}
export class Estudiante {
    
    constructor(
    public nombres: string,
    public apellidos: string,
    public matricula: string,
    public cedula:string,
    public nivel: Nivel,
    public institucion: Institucion,
    public estado: string
    ){}
}
