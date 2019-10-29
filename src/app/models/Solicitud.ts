import { Documento } from './Documento';
import { Estados } from './Enum';

export class SolicitudDTO {

    constructor(
        public estudianteId: string, 
        public documentos: Documento[]
        ){}

}

export class Solicitud {

        constructor(
            public id?: string,
            public estado?: Estados
        ){}
}