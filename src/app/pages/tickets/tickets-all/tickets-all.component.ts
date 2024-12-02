import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { Ticket } from '../../../common/interface/ticket.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteTicketComponent } from '../components/delete-ticket/delete-ticket.component';
import { ViewTicketComponent } from '../components/view-ticket/view-ticket.component';
import { AsignTicketComponent } from '../components/asign-ticket/asign-ticket.component';
import { NewTicketComponent } from '../components/new-ticket/new-ticket.component';
@Component({
  selector: 'app-tickets-all',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    FormsModule,
    DividerModule,
  ],
  templateUrl: './tickets-all.component.html',
  styleUrl: './tickets-all.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class TicketsAllComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;
  searchValue: string | undefined;
  loading: boolean = false;
  allTickets!: Ticket[];
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void { }

  constructor(
    public dialogService: DialogService
  ) {
    this.allTickets = [
      { id : 1 , title : 'departamento 1' , category : 'terst' , prioridad : 'asd' , status : 'asd' , esAsignado : true  }
    ]
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.dt1.filterGlobal(inputElement.value, 'contains');
  }

openNuevo(){
    this.ref = this.dialogService.open(NewTicketComponent, {
      header: 'Nuevo Usuario',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
}


openAsignar(event:any){
    this.ref = this.dialogService.open(AsignTicketComponent, {
      header: '',
      width: '50vw',
      modal:true,
      closable : true,
      focusOnClose : true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
}


openVer(event:any){
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




openEliminar(event:any){
  this.ref = this.dialogService.open(DeleteTicketComponent, {
    header: 'Eliminar Usuario',
    width: '50vw',
    modal:true,
    breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
    },
  });
}


}
