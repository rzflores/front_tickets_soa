import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ViewTicketComponent } from '../components/view-ticket/view-ticket.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CloseTicketComponent } from '../components/close-ticket/close-ticket.component';
import { AdjuntarTicketComponent } from '../components/adjuntar-ticket/adjuntar-ticket.component';

@Component({
  selector: 'app-ticket-comments',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule ,ChipModule , PanelModule , CardModule , InputTextareaModule],
  templateUrl: './ticket-comments.component.html',
  styleUrl: './ticket-comments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class TicketCommentsComponent { 
  ref: DynamicDialogRef | undefined;
  descripcion:string = ''

  constructor(
    public dialogService: DialogService
  ) {
    
  }

  openViewTicket(){
    this.ref = this.dialogService.open(ViewTicketComponent, {
      header: '',
      width: '30vw',
      modal:true,
      closable : true,
      focusOnClose : true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
  }

  openAjuntarArchivo(){
    this.ref = this.dialogService.open(AdjuntarTicketComponent, {
      header: 'Adjuntar Archivo',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
    });
  }

  openCloseTicket(){
    this.ref = this.dialogService.open(CloseTicketComponent, {
      header: 'Cerrar Ticket',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
    });
  }

  addComentario(){

  }
 

}
