export interface Ticket{
    id: number,
    title: string,
    prioridad: string,
    category : string,
    status: string,
    esAsignado: boolean
}


export interface Agente{
    id: number,
    nombre: string,
}


export interface Prioridad{
    id: number,
    nombre: string,
}

