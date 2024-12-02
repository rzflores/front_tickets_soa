import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [ ButtonModule , FloatLabelModule , FormsModule , InputTextModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogService ]
})
export class DeleteUserComponent { 

  constructor(public ref: DynamicDialogRef) {}
  executeEliminar(){

  }

  cancelEliminar(){
    this.ref.close();
  }


}
