import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-all',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tickets-all.component.html',
  styleUrl: './tickets-all.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsAllComponent implements OnInit {

  ngOnInit(): void { }

}
