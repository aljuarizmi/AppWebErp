import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,RouterModule,MenuComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  constructor(private authService: AuthService, private router: Router) {};
  logout() {
    if(confirm("¿Seguro que desea cerrar sesion?")){
      this.authService.logout();
    }
    //this.router.navigate(['/login']);
  }
}
