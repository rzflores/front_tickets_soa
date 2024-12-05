import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PreCommentTicketComponent } from '../pre-comment-ticket/pre-comment-ticket.component';
import { Ticket } from '../../../../common/interface/ticket.interface';
import { Router } from '@angular/router';
import { DataSharedService } from '../../../../common/services/DataShared.service';

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
  
  viewItem! : Ticket ;
  refPrecomment: DynamicDialogRef | undefined;
  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    public router: Router,
    private dataShared: DataSharedService
  ) {
    this.viewItem = this.config.data;
    this.dataShared.setViewTicket(this.viewItem)
  }
  
    viewComentarios(){
      this.ref.close();
      if(this.viewItem.status === 0){
        this.refPrecomment = this.dialogService.open( PreCommentTicketComponent , {
          header: '',
          width: '50vw',
          modal:true,
          breakpoints: {
              '960px': '75vw',
              '640px': '90vw'
          },        
      });
    }else{
      this.router.navigate(['/dashboard/ticket-commets'])
    }
      
  }
}
