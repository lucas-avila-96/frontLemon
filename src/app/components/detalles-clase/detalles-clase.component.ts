import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalles-clase',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './detalles-clase.component.html',
  styleUrl: './detalles-clase.component.css'
})
export class DetallesClaseComponent {
    // Propiedad que será utilizada en el template
    claseSeleccionada = {
      nombre: 'Kick Boxing (CAN)',
      disponibles: 18,
      total: 20,
      clientes: [
        { nombre: 'FELDT, Mathaus', estado: 'Reservado' },
        { nombre: 'AUD, Horacio', estado: 'Pendiente de Pago' },
      ],
    };
}
