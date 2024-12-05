import { Injectable } from '@angular/core';
import { Ticket, UserAgent } from '../interface/ticket.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../../pages/categories/models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  private usuarioInicial: UserAgent = 
  { id: 0, 
    name: '', 
    email: '',
    address: '',
    created_at: '',
    department_id: 0,
    email_verified_at: '',
    image: '',
    phone: '',
    type: 0,
    updated_at: ''
  };


  private categoryInicial : Category = {
    id : 0,
    department_id : 0,
    name : '',
    created_at : '',
    updated_at : ''
  }

  private viewTikectInicial: Ticket = 
  { 
    id: 0,
    assignedText: '',
    category: this.categoryInicial,
    category_id : 0,
    created_at: '',
    description : '',
    priority : 0,
    priorityText: '',
    status:0,
    statusText: '',
    title: '',
    user_id: 0,
    updated: '',
    assigned_agent: []
  };
  


  private usuarioSubject = new BehaviorSubject<UserAgent>(this.usuarioInicial);
  usuario$: Observable<UserAgent> = this.usuarioSubject.asObservable();

  private viewTicketSubject = new BehaviorSubject<Ticket>(this.viewTikectInicial);
  viewTicketSubject$: Observable<Ticket> = this.viewTicketSubject.asObservable();

  constructor() { }

  getUsuario(): UserAgent {
    return this.usuarioSubject.getValue();
  }

  setUsuario(nuevoUsuario: UserAgent): void {
    this.usuarioSubject.next(nuevoUsuario);
  }

  getViewTicket(): Ticket {
    return this.viewTicketSubject.getValue();
  }

  setViewTicket(nuevoViewTicket: Ticket): void {
    this.viewTicketSubject.next(nuevoViewTicket);
  }
}
