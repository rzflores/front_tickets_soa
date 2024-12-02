import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-close-ticket',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './close-ticket.component.html',
  styleUrl: './close-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseTicketComponent { 


  constructor(public ref: DynamicDialogRef) {}
  executeCerrarTicket(){

  }

  cancelCerrarTicket(){
    this.ref.close();
  }

}
