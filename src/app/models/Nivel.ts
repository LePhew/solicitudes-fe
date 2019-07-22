export class NivelDTO {

    constructor(
    public nombre: string,
    public descripcion: string,
    public orden: number
    ){}
}

export class Nivel {
    
    constructor(
    public id: string,
    public nombre: string,
    public descripcion: string,
    public orden: number
    ){}
}