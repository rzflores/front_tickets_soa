import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { Category } from './models/category.interface';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';

@Component({
  selector: 'app-categories',
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
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
})
export class CategoriesComponent implements OnInit {


  @ViewChild('dt1') dt1!: Table;
  searchValue: string | undefined;
  loading: boolean = false;
  categories!: Category[];
  ref: DynamicDialogRef | undefined;
  constructor(
    public dialogService: DialogService
  ) {
    this.categories = [
      {
       id : 1,
       nombre : 'texto' ,
       nombre_departamento : 'text'
      }
    ]
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
      this.ref = this.dialogService.open(NewCategoryComponent, {
        header: 'Nueva Categoria',
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
    });
  }

  openEditar(event:any){
    this.ref = this.dialogService.open(EditCategoryComponent, {
      header: 'Editar Departamento',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
  }

  openEliminar(event:any){
    this.ref = this.dialogService.open(DeleteCategoryComponent, {
      header: 'Eliminar Departamento',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
    });
  }

}
