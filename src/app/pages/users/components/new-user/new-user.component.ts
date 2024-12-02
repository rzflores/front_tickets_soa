import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Department } from '../../../departments/models/department.interface';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule , DropdownModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewUserComponent {

  nombre_usuario : string = ''
  tipo:string = ''
  email:string = ''
  celular:string = ''
  password:string = ''
  departments: Department[] | undefined;
  selectedDepartment: Department | undefined;

  crearUsuario(){

  }

 }
