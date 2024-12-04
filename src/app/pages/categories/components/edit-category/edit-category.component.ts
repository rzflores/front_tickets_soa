import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Department } from '../../../departments/models/department.interface';
import { DepartmentService } from '../../../departments/services/department.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Category } from '../../models/category.interface';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule,DropdownModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategoryComponent {
  nombre_category : string = '';
  departments: Department[] | undefined;
  selectedDepartment: Department | undefined;
  token : string = '';
  editItem! : Category ;
  constructor(
    private departmentService : DepartmentService,
    private cdr : ChangeDetectorRef,
    private config: DynamicDialogConfig,
  ) {
    this.editItem = this.config.data;
    this.nombre_category = this.editItem.name;
    this.token = localStorage.getItem('token') ?? ''
    this.departmentService.getAll(this.token).subscribe(
      {
        next: res => {
          this.departments = res.departments;
          this.selectedDepartment = this.departments?.find(item => item.id === this.editItem.department_id)
          this.cdr.detectChanges();
        }
      }
    )
  }

  editarCategoria(){
    
  }

 }
