import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-lista-horarios',
  imports: [CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './lista-horarios.component.html',
  styleUrl: './lista-horarios.component.css'
})
export class ListaHorariosComponent {
  horarios = [
    { fecha: '2024-12-11', hora: '08:30', clase: 'Aero Flex', disponibles: 7, total: 12 },
    { fecha: '2024-12-11', hora: '10:00', clase: 'Aero Zen', disponibles: 11, total: 12 },
  ];

}
