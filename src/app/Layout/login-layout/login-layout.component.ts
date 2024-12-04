import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    CardModule,
    FormsModule,
    ToastModule
  ],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[MessageService]
})
export class LoginLayoutComponent implements OnInit {

  email : string = ''
  password : string = ''

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
  ) 
  {
  }

  ngOnInit(): void { }

  executeLogin() : void
  {
    let dataRequest = {
      email: this.email,
      password:this.password
  }


    this.authService.login(dataRequest)
    .subscribe( 
      {
        next: (res) => {
          if(res.token){
            localStorage.setItem( 'token' , res.token)
            this.router.navigate(['/dashboard']);
          }
          
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Contraseña y/o Correo Invalido' });
        }

      }
    );
   
  }
}
