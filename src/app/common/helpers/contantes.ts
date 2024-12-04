import { Prioridad } from "../interface/ticket.interface"

export interface prioridadConst {
    Bajo : 0,
    Medio : 1,
    Alto: 2
}


export const arrPrioridades : Prioridad[] = [
    {
        id: 0,
        nombre : 'Bajo'
    },
    {
        id : 1 ,
        nombre : 'Medio'
    },
    {
        id : 2,
        nombre : 'Alto'
    }
]