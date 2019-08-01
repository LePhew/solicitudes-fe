import { Documento } from './Documento';
import { Estados } from './Enum';
import { Estudiante } from './Estudiante';

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