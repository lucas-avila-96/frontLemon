import { Component } from '@angular/core';
import { DetallesClaseComponent } from "../components/detalles-clase/detalles-clase.component";
import { ListaHorariosComponent } from "../components/lista-horarios/lista-horarios.component";
import { FiltroComponent } from "../components/filtro/filtro.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  imports: [CommonModule, DetallesClaseComponent, ListaHorariosComponent, FiltroComponent]
})
export class ReservasComponent {


  
}
