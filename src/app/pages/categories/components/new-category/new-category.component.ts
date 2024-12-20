import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { Department } from '../../../departments/models/department.interface';


@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule,DropdownModule],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCategoryComponent {
  nombre_category : string = '';
  departments: Department[] | undefined;
  selectedDepartment: Department | undefined;
  crearCategoria(){
    
  }


 }
