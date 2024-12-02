import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PreCommentTicketComponent } from '../pre-comment-ticket/pre-comment-ticket.component';

@Component({
  selector: 'app-view-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class ViewTicketComponent { 
  

  refPrecomment: DynamicDialogRef | undefined;
  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef
  ) {
  }
  
    viewComentarios(){
      this.ref.close();
      this.refPrecomment = this.dialogService.open( PreCommentTicketComponent , {
        header: 'Nuevo Usuario',
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },        
    });
  }
}
