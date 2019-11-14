import { Nivel } from './Nivel';
import { Institucion } from './Institucion';

export class DocumentoDTO{

    constructor(
    public nombre: string,
    public descripcion: string,
    public nivelId: string,
    public institucionId: string
    ){}
    
}

export class Documento{

    constructor(
        public id: string,
        public nombre: string,
        public descripcion: string,
        public nivel: Nivel,
        public institucion: Institucion,
        public creado: Date
    ){}

}