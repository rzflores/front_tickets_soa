import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginLayoutComponent implements OnInit {

  ngOnInit(): void { }

}
