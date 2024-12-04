import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Ticket } from '../../../../common/interface/ticket.interface';
import { TicketService } from '../../services/ticket.service';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../../common/services/Toast.service';

@Component({
  selector: 'app-delete-ticket',
  standalone: true,
    
    imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './delete-ticket.component.html',
  styleUrl: './delete-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService , ToastService ]
})
export class DeleteTicketComponent {

  deleteItem! : Ticket ;
  token : string = '';
  constructor(
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private ticketService : TicketService,
    private toastService: ToastService,
  ) {
    this.deleteItem = this.config.data;
    this.token = localStorage.getItem('token') ?? '';
  }
  executeEliminar(id : number){
    this.ticketService.delete(this.token,id).subscribe({
      next: (res) => {
        if(res.message){
          this.toastService.addMessage({ severity: 'success', summary: 'Éxito', detail: 'Ticket Eliminado con exito' });
          this.ref.close();
        }
      },
      error: (err) => {
        this.toastService.addMessage({ severity: 'error', summary: 'Error', detail: 'No se puede eliminar un ticket en estado cerrado o en proceso.' });
        this.ref.close();
      },
      
    })
  }

  cancelEliminar(){
    this.ref.close();
  }


 }
