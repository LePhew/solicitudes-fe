import { Documento } from './Documento';

export class Solicitud {

    constructor(
        public estudianteId: string, 
        public documentos: Documento[]
        ){}

}