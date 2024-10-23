import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-unassigned',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tickets-unassigned.component.html',
  styleUrl: './tickets-unassigned.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsUnassignedComponent implements OnInit {

  ngOnInit(): void { }

}
