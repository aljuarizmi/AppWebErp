import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import {MenuItem} from '../../models/menu.model'
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, Routes } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  menu: MenuItem[] = [];

  constructor(private menuService: MenuService,private authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.authService.getMenu().subscribe((data: MenuItem[]) => {
      this.menu = this.setExpandedProperty(data);
    });
  }
  setExpandedProperty(menu: MenuItem[]): MenuItem[] {
    return menu.map(item => ({
      ...item,
      expanded: false, // Asegura que todos inicien colapsados
      children: item.children ? this.setExpandedProperty(item.children) : []
    }));
  }
  toggle(item: any) {
    item.expanded = !item.expanded;
  }
  navigateTo(route: string,name:string,code:string) {
    const existeRuta = this.verificarRuta(routes, code);
    //console.log("route: "+route+",name: "+name)
    if (existeRuta) {
      this.router.navigate([route],{queryParams:{syMenuName:name},skipLocationChange:true}).catch(error => {
        console.error('Error al navegar:', error);});
    }else {
      alert('La opción "' + name+'" no esta disponible');
    }
  }
  private verificarRuta(rutas: Routes, ruta: string): boolean {
    for (let r of rutas) {
      if (r.path === ruta) {
        return true;
      }
      if (r.children) {
        if (this.verificarRuta(r.children, ruta)) {
          return true;
        }
      }
    }
    return false;
  }
}
