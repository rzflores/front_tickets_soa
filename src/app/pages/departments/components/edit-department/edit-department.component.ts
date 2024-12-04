import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { Department } from '../../models/department.interface';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDepartmentComponent {

  editItem! : Department ;
  nombre_department : string = '';

  constructor(
    private config: DynamicDialogConfig,
    ) {
    this.editItem = this.config.data;
    this.nombre_department = this.editItem.name
    }

  editarDepartamento(){
    
  }

 }
