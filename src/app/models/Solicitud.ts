import { Estudiante } from './Estudiante';
import { Documento } from './Documento';

export class Solicitud {

    constructor(
        public estudiante: Estudiante, 
        public documentos: Documento[], 
        public estado: string){}

}