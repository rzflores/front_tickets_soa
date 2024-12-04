import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Prioridad } from '../../../../common/interface/ticket.interface';
import { Category } from '../../../categories/models/category.interface';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CategoryService } from '../../../categories/services/category.service';
import { arrPrioridades } from '../../../../common/helpers/contantes';
import { TicketService } from '../../services/ticket.service';
import { ToastService } from '../../../../common/services/Toast.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule , DropdownModule , InputTextareaModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ToastService]
})
export class NewTicketComponent {

  token : string = '';

  titulo : string = '';
  descripcion:string = '';

  prioridades: Prioridad[] | undefined;
  selectedPrioridad: Prioridad | undefined;
  categorias: Category[] | undefined;
  selectedCategoria: Category | undefined;

  constructor(
    private categoriaService : CategoryService,
    private ticketService : TicketService,
    private toastService : ToastService,
    public ref: DynamicDialogRef,

  ) {
    this.token = localStorage.getItem('token') ?? '';
    this.categoriaService.getAll(this.token).subscribe({
      next : (res) => {
        this.categorias = res.categories
      }
    })

    this.prioridades = arrPrioridades;


  }

  crearTicket(){
    let request = {
        title: this.titulo,
        description: this.descripcion,
        priority: this.selectedPrioridad?.id,
        category_id: this.selectedCategoria?.id
    }

    this.ticketService.create(this.token , request).subscribe(
      {
        next: (res) => {
          if(res.message){
            this.toastService.addMessage({ severity: 'success', summary: 'Éxito', detail: 'Ticket Creado con exito' });
            this.ref.close();
          }
        },
        error: (err) => {
          this.toastService.addMessage({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error al crear el ticket' });
          this.ref.close();
        },
      }
    )



  }


}
