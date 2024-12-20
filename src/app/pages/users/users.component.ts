import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, type OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { User } from './models/User.interface';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    FormsModule,
    DividerModule,
    DialogModule
  ],
  providers: [ DialogService ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  @ViewChild('dt1') dt1!: Table;
  searchValue: string | undefined;
  loading: boolean = false;
  users!: User[];
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService
  ) {
    this.users = [
      { Id : 1 , Nombre : 'departamento 1' , Celular : 'terst' , Departamento : 'asd' , Tipo : 'asd'  }
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
    this.ref = this.dialogService.open(NewUserComponent, {
      header: 'Nuevo Usuario',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
}


openVer(event:any){
  this.ref = this.dialogService.open(ViewUserComponent, {
    header: '',
    width: '50vw',
    modal:true,
    closable : true,
    focusOnClose : true,
    breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
    },
});
}

openEditar(event:any){
    this.ref = this.dialogService.open(EditUserComponent, {
      header: 'Editar Usuario',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
}

openEliminar(event:any){
  this.ref = this.dialogService.open(DeleteUserComponent, {
    header: 'Eliminar Usuario',
    width: '50vw',
    modal:true,
    breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
    },
  });
}

}
