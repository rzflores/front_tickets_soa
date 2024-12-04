import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Ticket, UserAgent } from '../../../../common/interface/ticket.interface';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-asign-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule,DropdownModule,ChipModule],
  templateUrl: './asign-ticket.component.html',
  styleUrl: './asign-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsignTicketComponent { 

  agents: UserAgent[] | undefined;
  selectedAgent: UserAgent | undefined;
  AsignItem! : Ticket;
  token :string = '';
  constructor(
    private config: DynamicDialogConfig, 
    private ticketService : TicketService,
    private cdr : ChangeDetectorRef
  ) {
    this.AsignItem = this.config.data;
    this.token = localStorage.getItem('token') ?? '';
    this.ticketService.showAgentAsigned(this.token, this.AsignItem.id).subscribe(
      {
        next: (res) => {
          this.agents = res.assigned_agent
          this.cdr.detectChanges();
        }
      }
    )
  }
  AsignarTicket(){
    
  }

}
