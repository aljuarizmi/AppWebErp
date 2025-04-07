import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../services/auth.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,RouterModule,MenuComponent,MatIcon],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  isMenuHidden = false; // Estado del menú
  username: string='';
  constructor(private authService: AuthService, private route: ActivatedRoute) {};
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.username=params.get('username')||'';
    });
  }
  logout() {
    if(confirm("¿Seguro que desea cerrar sesion?")){
      this.authService.logout();
    }
  }
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
