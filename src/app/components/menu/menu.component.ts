import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import {MenuItem} from '../../models/menu.model'
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  menu: MenuItem[] = [];
  /*toggle(item: MenuItem) {
    item.expanded = !item.expanded;
  }*/
  constructor(private menuService: MenuService,private authService: AuthService,private router: Router) {}

  /*ngOnInit(): void {
    this.menuService.getMenu().subscribe((data) => {
      this.menu = data;
    });
  }*/
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
    navigateTo(route: string) {
      this.router.navigate([route],{skipLocationChange:true}).catch(error => {
        console.error('Error al navegar:', error);});
    }
}
