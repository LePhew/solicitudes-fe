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
            
            public id: string,
            
            
            public solicitudCode: string,
            
            
            public estudiante: Estudiante,
            
            
            public estudianteId: string,
            
            
            public documentos: Documento[],
        
            
            public creada: Date,
        
            
            public modificada: Date,
        
            
            public estado: Estados
        ){}
}