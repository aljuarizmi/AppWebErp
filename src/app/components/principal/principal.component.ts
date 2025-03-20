import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../services/auth.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,RouterModule,MenuComponent,MatIcon],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  isMenuHidden = false; // Estado del menú
  constructor(private authService: AuthService, private router: Router) {};
  logout() {
    if(confirm("¿Seguro que desea cerrar sesion?")){
      this.authService.logout();
    }
  }
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
