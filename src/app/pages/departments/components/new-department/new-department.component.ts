import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-new-department',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './new-department.component.html',
  styleUrl: './new-department.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewDepartmentComponent { 

  nombre_department : string = '';

  crearDepartamento(){
    
  }
}
