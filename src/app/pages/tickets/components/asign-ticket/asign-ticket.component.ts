import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Agente } from '../../../../common/interface/ticket.interface';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-asign-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule,DropdownModule,ChipModule],
  templateUrl: './asign-ticket.component.html',
  styleUrl: './asign-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsignTicketComponent { 

  agents: Agente[] | undefined;
  selectedAgent: Agente | undefined;


  AsignarTicket(){
    
  }

}
