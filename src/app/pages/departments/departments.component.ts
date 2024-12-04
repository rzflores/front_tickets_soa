import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, type OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { Department } from './models/department.interface';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewDepartmentComponent } from './components/new-department/new-department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './components/delete-department/delete-department.component';
import { DepartmentService } from './services/department.service';


@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    FormsModule,
    DividerModule,
    DynamicDialogModule
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[DialogService]
})
export class DepartmentsComponent implements OnInit {


  @ViewChild('dt1') dt1!: Table;
  searchValue: string | undefined;
  loading: boolean = false;
  departments!: Department[];
  ref: DynamicDialogRef | undefined;
  token:string = '';
  constructor(
    public dialogService: DialogService,
    private departmentService : DepartmentService,
    private cdr : ChangeDetectorRef
  ) {
    this.token = localStorage.getItem('token') ?? '';
    this.departmentService.getAll(this.token).subscribe(
      {
        next: res => {
          this.departments = res.departments;
          this.cdr.detectChanges();
        }
      }
    )

    
  }

  ngOnInit(): void { }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.dt1.filterGlobal(inputElement.value, 'contains');
  }

  openNuevo(){
    this.ref = this.dialogService.open(NewDepartmentComponent, {
      header: 'Nuevo Departamento',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
}

openEditar(item:Department){
    this.ref = this.dialogService.open(EditDepartmentComponent, {
      header: 'Editar Departamento',
      width: '50vw',
      modal:true,
      data: item,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
}

openEliminar(item:Department){
  this.ref = this.dialogService.open(DeleteDepartmentComponent, {
    header: 'Eliminar Departamento',
    width: '50vw',
    data: item.id, 
    modal:true,
    breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
    },
  });
}

}
