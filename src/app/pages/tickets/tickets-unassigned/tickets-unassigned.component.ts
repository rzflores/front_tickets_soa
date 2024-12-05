import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, type OnInit } from '@angular/core';
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
import { TicketService } from '../services/ticket.service';
import { ExportExcelService } from '../../../common/services/ExportExcel.service';

@Component({
  selector: 'app-tickets-unassigned',
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
  templateUrl: './tickets-unassigned.component.html',
  styleUrl: './tickets-unassigned.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class TicketsUnassignedComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;
  searchValue: string | undefined;
  loading: boolean = false;
  unasignedTickets!: Ticket[];
  ref: DynamicDialogRef | undefined;
  token:string = '';



  constructor(
    public dialogService: DialogService,
    private ticketService : TicketService,
    private cdr : ChangeDetectorRef,
    private excelExportService : ExportExcelService

  ) {
    this.token = localStorage.getItem('token') ?? '';
    this.ticketService.getAll(this.token).subscribe({
      next: res => {
        this.unasignedTickets = res;
        this.unasignedTickets = this.unasignedTickets.filter( item => item.status == 0)
        this.cdr.detectChanges();
      }
    })
  }

  ngOnInit(): void { }

  exportExcel() {
    this.excelExportService.exportToExcel(
      this.unasignedTickets,
      'TicketNoAsignados'
    )
  }
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.dt1.filterGlobal(inputElement.value, 'contains');
  }

  openNuevo(){
    this.ref = this.dialogService.open(NewTicketComponent, {
      header: 'Nuevo Ticket',
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
  console.log(event)

  this.ref = this.dialogService.open(ViewTicketComponent, {
    header: '',
    width: '30vw',
    modal:true,
    data: event,
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
    header: 'Eliminar Ticket',
    width: '50vw',
    data: event,
    modal:true,
    breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
    },
  });
}
}
