import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLineModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatLineModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  usuarios = [
    { nombre: 'AMIR', abono: 'BOXEO LIBRE', estado: 'activo', deuda: null ,asistenciaConfirmada: false},
    { nombre: 'ISABEL', abono: 'BOXEO LIBRE', estado: 'activo', deuda: null ,asistenciaConfirmada: false},
    { nombre: 'RICCARDO', abono: 'BOXEO LIBRE', estado: 'inactivo', deuda: 300 ,asistenciaConfirmada: false},
    { nombre: 'GERARDO', abono: 'BOXEO LIBRE', estado: 'inactivo', deuda: 300 ,asistenciaConfirmada: false},
    { nombre: 'JONATHAN', abono: 'PASE EVERLAST', estado: 'inactivo', deuda: null ,asistenciaConfirmada: false},
    { nombre: 'ALAN', abono: 'BOXEO LIBRE', estado: 'inactivo', deuda: null ,asistenciaConfirmada: false},
    { nombre: 'CLAUDIA', abono: 'BOXEO LIBRE', estado: 'inactivo', deuda: null ,asistenciaConfirmada: false},
    { nombre: 'NADIA', abono: 'BOXEO LIBRE', estado: 'inactivo', deuda: null ,asistenciaConfirmada: false},
  ];


  confirmarAsistencia(usuario: any) {
    usuario.asistenciaConfirmada = true;
    console.log(`Asistencia confirmada para: ${usuario.nombre}`);
    // Aquí puedes llamar a un servicio HTTP para registrar la asistencia en la base de datos.
  }
  
}
