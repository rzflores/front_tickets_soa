import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDepartmentComponent {

  nombre_department : string = '';
  editarDepartamento(){
    
  }

 }
