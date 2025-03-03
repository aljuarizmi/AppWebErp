import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {MenuItem } from '../models/menu.model'

/*export interface MenuItem {
  id: number;
  nombre: string;
  ruta?: string;
  icono?: string;
  hijos?: MenuItem[];

  syMenuCode: string | null;
  syMenuName: string;
  syMenuParent: string | null;
  syMenuLevel: number;
  syOpcActive: string;
  children: MenuItem[] | null;
}*/

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private jsonUrl = 'assets/menu.json';
  private apiUrl = 'https://localhost:7113/api/configurations/menu'; // Cambiar por la URL real

  constructor(private http: HttpClient) {}
  //constructor(){}

  /*obtenerMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }*/

    /*getMenu(): Observable<MenuItem[]> {
      return of(this.menuData);
    }*/

    
}
