import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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
import { DataSharedService } from '../../../common/services/DataShared.service';
import { CommentTicket, Ticket } from '../../../common/interface/ticket.interface';
import { CommentService } from '../services/Comment.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-ticket-comments',
  standalone: true,
  imports: [ ToastModule, ButtonModule , FloatLabelModule , FormsModule , InputTextModule ,ChipModule , PanelModule , CardModule , InputTextareaModule],
  templateUrl: './ticket-comments.component.html',
  styleUrl: './ticket-comments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class TicketCommentsComponent { 
  ref: DynamicDialogRef | undefined;
  descripcion:string = ''
  viewTicket! : Ticket;
  comments : CommentTicket[] = [];
  token : string = '';
  constructor(
    public dialogService: DialogService,
    private dataShared : DataSharedService,
    private commentService : CommentService,
    private cdr : ChangeDetectorRef,
    private messageService : MessageService
  ) {
    this.token = localStorage.getItem('token') ?? ''
    this.viewTicket =  this.dataShared.getViewTicket();
    this.getComments();    
  }

  getComments(){
    this.commentService.getAll(this.token,this.viewTicket.id).subscribe({
      next : res => {
        this.comments = res;
        this.cdr.detectChanges();
      }
    })
  }


  openViewTicket(item : any){
    console.log(item)
    this.ref = this.dialogService.open(ViewTicketComponent, {
      header: '',
      width: '30vw',
      data : item,
      modal:true,
      closable : true,
      focusOnClose : true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
  }

  openAjuntarArchivo(item: any){
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

  openCloseTicket(item: any){
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
    let request = {
      comment : this.descripcion
    }
    
    this.commentService.create(this.token,this.viewTicket.id,request).subscribe({
      next : (res) => {
        if(res.message){
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Comentario agregado con exito' });
          this.getComments();
          this.descripcion = ''    
        }
      }
    })
  }
 

}
