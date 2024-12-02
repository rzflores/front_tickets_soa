import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-pre-comment-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule , RouterModule],
  templateUrl: './pre-comment-ticket.component.html',
  styleUrl: './pre-comment-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreCommentTicketComponent { 

  
  constructor(
    public ref: DynamicDialogRef,
    public router: Router
  ) {}
  executeAutoAsign(){
    this.ref.close();
    this.router.navigate(['/dashboard/ticket-commets'])
  } 

  cancelAutoAsign(){
    this.ref.close();
  }



}
