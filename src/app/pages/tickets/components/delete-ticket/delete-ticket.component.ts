import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-delete-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './delete-ticket.component.html',
  styleUrl: './delete-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class DeleteTicketComponent {

  
  constructor(public ref: DynamicDialogRef) {}
  executeEliminar(){

  }

  cancelEliminar(){
    this.ref.close();
  }


 }
