import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Department } from '../../../departments/models/department.interface';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule , DropdownModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserComponent { 

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
