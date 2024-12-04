import { Category } from "../../pages/categories/models/category.interface"

export interface Ticket{
    id: number,
    title: string,
    description: string,
    status : number,
    priority: number,
    user_id : number,
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






export interface Prioridad{
    id: number,
    nombre: string,
}

