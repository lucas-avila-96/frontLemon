import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  nombreUsuario = 'FELDT, MATHAUS';

  displayedColumns: string[] = ['id', 'inicio', 'vencimiento', 'abono', 'acciones'];
  dataSource = [
    { id: 531001, inicio: '23/08/17', vencimiento: '22/08/18', abono: 'MATRÍCULA ANUAL' },
    { id: 861592, inicio: '16/05/18', vencimiento: '15/06/18', abono: 'PASE EVERLAST' },
  ];
}
