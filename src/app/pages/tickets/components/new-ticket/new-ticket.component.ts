import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Prioridad } from '../../../../common/interface/ticket.interface';
import { Category } from '../../../categories/models/category.interface';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonModule , FloatLabelModule , FormsModule , InputTextModule , DropdownModule , InputTextareaModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTicketComponent {

  titulo : string = ''
  descripcion:string = ''

  prioridades: Prioridad[] | undefined;
  selectedPrioridad: Prioridad | undefined;
  categorias: Category[] | undefined;
  selectedCategoria: Category | undefined;



  crearTicket(){
    
  }


}
