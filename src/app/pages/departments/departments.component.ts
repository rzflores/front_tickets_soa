import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentsComponent implements OnInit {

  ngOnInit(): void { }

}
