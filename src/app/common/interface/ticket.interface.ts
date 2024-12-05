import { Category } from "../../pages/categories/models/category.interface"

export interface Ticket{
    id: number,
    title: string,
    description: string,
    status : number,
    statusText : string,
    priority: number,
    priorityText : string,
    user_id : number,
    assignedText: string
    created_at : string,
    updated : string
    category_id: number
    category: Category,
    assigned_agent : UserAgent[]
}

export interface UserAgent{
    id: number,
    name: string,
    email: string,
    email_verified_at: string,
    type: number,
    phone: string,
    address: string,
    image: string,
    created_at: string,
    updated_at: string,
    department_id: number,
}

export interface CommentTicket {
        id: number,
        description: string,
        ticket_id: number,
        user_id: number,
        created_at: string,
        updated_at: string
}




export interface Prioridad{
    id: number,
    nombre: string,
}

