import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
