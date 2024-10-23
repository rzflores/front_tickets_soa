import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-assigned',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tickets-assigned.component.html',
  styleUrl: './tickets-assigned.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsAssignedComponent implements OnInit {

  ngOnInit(): void { }

}
