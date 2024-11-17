import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { Ticket } from '../../common/interface/ticket.interface';
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
})
export class TicketsAllComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;
  searchValue: string | undefined;
  loading: boolean = false;
  allTickets!: Ticket[];

  ngOnInit(): void { }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.dt1.filterGlobal(inputElement.value, 'contains');
  }

}
