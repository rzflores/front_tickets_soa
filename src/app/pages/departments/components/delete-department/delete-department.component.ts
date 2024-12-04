import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { DepartmentService } from '../../services/department.service';


@Component({
  selector: 'app-delete-department',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './delete-department.component.html',
  styleUrl: './delete-department.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class DeleteDepartmentComponent {

  idItem : string = ''
  token :string = ''
  constructor(
            public ref: DynamicDialogRef,
            private config: DynamicDialogConfig,
            private departmentService:DepartmentService
  ) {
    this.idItem = this.config.data;
    this.token = localStorage.getItem('token') ?? ''
  }
  executeEliminar(){
    this.departmentService.deleteDepartment(this.token,this.idItem)
    .subscribe({
      next: (res) => {
        console.log(res)
      }


    })
  }

  cancelEliminar(){
    this.ref.close();
  }
 }
