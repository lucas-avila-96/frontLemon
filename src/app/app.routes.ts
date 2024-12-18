import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ClientesComponent } from './clientes/clientes.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: 'clientes', component: ClientesComponent },


    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
