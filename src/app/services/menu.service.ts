//import { HttpClient } from '@angular/common/http';
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

  /*private menuData: MenuItem[] = [
    {
      syMenuCode: 'M03',
      syMenuName: 'Monedas',
      syMenuParent: '0',
      syMenuLevel: 3,
      syOpcActive: 'Y',
      children: [
        {
          syMenuCode: 'M03S01',
          syMenuName: 'Mantener',
          syMenuParent: 'M03',
          syMenuLevel: 6,
          syOpcActive: 'Y',
          children: [
            {
              syMenuCode: 'M03S01N01',
              syMenuName: 'Mantener Monedas',
              syMenuParent: 'M03S01',
              syMenuLevel: 9,
              syOpcActive: 'Y',
              children: null
            }
          ]
        }
      ]
    }
  ];*/
  private jsonUrl = 'assets/menu.json';
  //private apiUrl = 'https://tuapi.com/menu'; // Cambiar por la URL real

  //constructor(private http: HttpClient) {}
  constructor(){}

  /*obtenerMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }*/

    /*getMenu(): Observable<MenuItem[]> {
      return of(this.menuData);
    }*/

    getMenu(): Observable<MenuItem[]> {
      //return this.http.get<MenuItem[]>(this.jsonUrl);
      //return from(fetch('assets/menu.json').then(res => res.json()));
      const menuData: MenuItem[] = [
        
        {
          "syMenuCode": "M00",
          "syMenuName": "Administrador del Sistema",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M00S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M00",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M00S01N01",
                  "syMenuName": "Configuración de Compañía",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N02",
                  "syMenuName": "Períodos del Sistema",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N03",
                  "syMenuName": "Cuentas Contables",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N04",
                  "syMenuName": "Cuentas Caja",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N05",
                  "syMenuName": "Detalles de Impuestos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N06",
                  "syMenuName": "Tarifas de Impuestos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N07",
                  "syMenuName": "Códigos de Trabajo",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N08",
                  "syMenuName": "Códigos de Estado",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N10",
                  "syMenuName": "Registro de Bancos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N11",
                  "syMenuName": "Mantenimientos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N12",
                  "syMenuName": "Tablas Generales",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N13",
                  "syMenuName": "Cuentas Bancarias",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N14",
                  "syMenuName": "Grupos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N16",
                  "syMenuName": "Formatos de Impresión",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N17",
                  "syMenuName": "Estado de Letras",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N18",
                  "syMenuName": "Matriz de Estado de Letras",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N19",
                  "syMenuName": "Control de Días",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N20",
                  "syMenuName": "Control Usuario/Monto Aprob.OE",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N21",
                  "syMenuName": "Control de Claves",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N22",
                  "syMenuName": "Configuración de Mail",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N23",
                  "syMenuName": "Cuentas Caja Diferidas Rel.",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N24",
                  "syMenuName": "Cuentas Caja / Cod Banco",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N25",
                  "syMenuName": "Tasas de Inflación Anual",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N26",
                  "syMenuName": "Reg. Usuarios",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N27",
                  "syMenuName": "Reg. Series",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N28",
                  "syMenuName": "Reg. Correlativos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N29",
                  "syMenuName": "Tipos de Venta/Mercado",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N30",
                  "syMenuName": "Mant. Ctas. de Monedas Perd./Gananc.",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N31",
                  "syMenuName": "Doc. Localización",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N32",
                  "syMenuName": "Rutas de Archivos Generales",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N33",
                  "syMenuName": "Tablas de Sistema",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N34",
                  "syMenuName": "Maestro Entidad",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N35",
                  "syMenuName": "Control de Formatos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N36",
                  "syMenuName": "Detalle Formato Impresión",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N37",
                  "syMenuName": "Usuarios SF",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N38",
                  "syMenuName": "Reglas Retención/Detracción/Percepción",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N39",
                  "syMenuName": "Centros de Costo",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N40",
                  "syMenuName": "Tipificadores-Reglas",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N41",
                  "syMenuName": "UIT",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N42",
                  "syMenuName": "Grupos Productivos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N43",
                  "syMenuName": "Grupo Tipo Operación",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N44",
                  "syMenuName": "Control por Empleado/Usuario por Trx",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N45",
                  "syMenuName": "Cuentas de Letras",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N80",
                  "syMenuName": "Administrador de Accesos",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N81",
                  "syMenuName": "Parámetros Generales",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N82",
                  "syMenuName": "Parámetros Generales II",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N83",
                  "syMenuName": "Parámetros Generales III",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N84",
                  "syMenuName": "Parámetros Generales IV",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S01N85",
                  "syMenuName": "Parámetros Generales V",
                  "syMenuParent": "M00S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M00S02",
              "syMenuName": "Ver",
              "syMenuParent": "M00",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M00S02N02",
                  "syMenuName": "Períodos del Sistema",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N03",
                  "syMenuName": "Cuentas Contables",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N04",
                  "syMenuName": "Cuentas Caja",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N05",
                  "syMenuName": "Detalles de Impuesto",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N06",
                  "syMenuName": "Tarifas de Impuesto",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N07",
                  "syMenuName": "Códigos de Trabajo",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N08",
                  "syMenuName": "Códigos de Estado",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S02N09",
                  "syMenuName": "Auditoría OE",
                  "syMenuParent": "M00S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M00S03",
              "syMenuName": "Trx",
              "syMenuParent": "M00",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M00S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M00",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M00S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M00",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M00S05003",
                  "syMenuName": "Tipo de Operación",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05004",
                  "syMenuName": "Documento de Caja Chica",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05005",
                  "syMenuName": "Territorios / Zonas",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05006",
                  "syMenuName": "Documento Tributarios",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05007",
                  "syMenuName": "Tipos de Solicitud",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05008",
                  "syMenuName": "Reportes Generales",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05009",
                  "syMenuName": "Lista Items",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05010",
                  "syMenuName": "Lista Clientes",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05011",
                  "syMenuName": "Lista Proveedores",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05012",
                  "syMenuName": "Plan de Cuentas General",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05013",
                  "syMenuName": "Plan de Cuentas Caja",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05014",
                  "syMenuName": "Consulta Data SNT",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05N01",
                  "syMenuName": "Impresiones Generales",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M00S05N02",
                  "syMenuName": "Impresiones Adm.Sist.",
                  "syMenuParent": "M00S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M01",
          "syMenuName": "Activos Fijos",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M01S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M01",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M01S01N01",
                  "syMenuName": "Maestro de Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N02",
                  "syMenuName": "División de Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N03",
                  "syMenuName": "Localización de Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N04",
                  "syMenuName": "Código Contable de Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N05",
                  "syMenuName": "Categoría de Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N06",
                  "syMenuName": "Entidades",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N07",
                  "syMenuName": "Entidades/Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N08",
                  "syMenuName": "Tipo de Trx. de Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N09",
                  "syMenuName": "Control Cambio de TCG a TCG",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N10",
                  "syMenuName": "Control Relación TCG y Proceso",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N11",
                  "syMenuName": "Activos Vinculados",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N12",
                  "syMenuName": "TCG/Entidad",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S01N20",
                  "syMenuName": "Configura Mod.Activos",
                  "syMenuParent": "M01S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M01S02",
              "syMenuName": "Ver",
              "syMenuParent": "M01",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M01S02N02",
                  "syMenuName": "División de Activos",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S02N03",
                  "syMenuName": "Localización de Activos",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S02N04",
                  "syMenuName": "Código Contable de Activos",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S02N05",
                  "syMenuName": "Categoría de Activos",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S02N06",
                  "syMenuName": "Entidades",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S02N07",
                  "syMenuName": "Control de TCG por Centro de Costo",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S02N10",
                  "syMenuName": "Ver Activos Fijos",
                  "syMenuParent": "M01S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M01S03",
              "syMenuName": "Trx",
              "syMenuParent": "M01",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M01S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M01",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M01S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M01",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M01S05001",
                  "syMenuName": "Activos Historial",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05002",
                  "syMenuName": "Activos por Grupos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05003",
                  "syMenuName": "Registro de Activos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05004",
                  "syMenuName": "Comparativo Entidades",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05005",
                  "syMenuName": "Reporte de Valuaciones",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05006",
                  "syMenuName": "Detalle de los Activos Fijos Revaluados",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05007",
                  "syMenuName": "Ficha del Activo",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05008",
                  "syMenuName": "Comparativo Saldos y valores tasados",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05009",
                  "syMenuName": "Gastos/Provisiones de Activos Fijos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05010",
                  "syMenuName": "Comparativo de valor referencial vs valor real",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05011",
                  "syMenuName": "Activos Fijos & Segmentos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05012",
                  "syMenuName": "Activos Pendientes de Revaluación",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05013",
                  "syMenuName": "Resumen de Activos Fijos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05014",
                  "syMenuName": "Listados de Análisis Activos Fijos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05015",
                  "syMenuName": "Análisis Activos Fijos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M01S05016",
                  "syMenuName": "Libro Electronico-Activos",
                  "syMenuParent": "M01S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M02",
          "syMenuName": "Inventarios",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M02S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M02",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M02S01N01",
                  "syMenuName": "Mantener Localizaciones",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N02",
                  "syMenuName": "Mantener Items",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N03",
                  "syMenuName": "Mantener Relación Almacenes / Items",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N04",
                  "syMenuName": "Mantener TCM (Tipo Costo Material)",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N05",
                  "syMenuName": "Mantener Categoría",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N06",
                  "syMenuName": "Mantener TCM (Tipo Costo Material)/Almacenes",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N07",
                  "syMenuName": "Mantener TCM/Almacenes/TO",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N08",
                  "syMenuName": "Mantener Series/Lotes",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N09",
                  "syMenuName": "Mantener Choferes",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N10",
                  "syMenuName": "Mantener Camiones",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N11",
                  "syMenuName": "Rangos",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N12",
                  "syMenuName": "Reglas de Registro de Items",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N13",
                  "syMenuName": "Controles de Trx. De Inventarios",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S01N20",
                  "syMenuName": "Configura Mod.Inventarios",
                  "syMenuParent": "M02S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M02S02",
              "syMenuName": "Ver",
              "syMenuParent": "M02",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M02S02N01",
                  "syMenuName": "Mantener Localizaciones",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N02",
                  "syMenuName": "Mantener Items",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N03",
                  "syMenuName": "Mantener Almacenes / Items",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N04",
                  "syMenuName": "Mantener TCM (Tipo Costo Material)",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N05",
                  "syMenuName": "Mantener Categoría",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N06",
                  "syMenuName": "Mantener TCM (Tipo Costo Material)/Almacenes",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N07",
                  "syMenuName": "Ver IM",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S02N12",
                  "syMenuName": "Mantener Items Params",
                  "syMenuParent": "M02S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M02S03",
              "syMenuName": "Trx",
              "syMenuParent": "M02",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M02S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M02",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M02S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M02",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M02S05005",
                  "syMenuName": "Kardex",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05006",
                  "syMenuName": "Listado de Tipo de Operación Almacén",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05007",
                  "syMenuName": "Reporte Orden de Venta",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05008",
                  "syMenuName": "Listado de Items Inmovilizados",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05009",
                  "syMenuName": "Listado de Artículos Sustitutos",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05010",
                  "syMenuName": "Stock Físico",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05011",
                  "syMenuName": "Listado de Items (Cód Fab.)",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05012",
                  "syMenuName": "Stock Mínimo",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05013",
                  "syMenuName": "kardex físico",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05014",
                  "syMenuName": "Saldos Finales",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05015",
                  "syMenuName": "Matriz de Saldos Kardex",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05016",
                  "syMenuName": "Listado de Stock Valorizado",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05017",
                  "syMenuName": "Listado de Stock por Almacén",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05018",
                  "syMenuName": "Resumen de Almacén por Línea",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05019",
                  "syMenuName": "Resumen de Tipo de Operación por Almacén",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05020",
                  "syMenuName": "Listado por Tipo de Operación por Almacén",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05021",
                  "syMenuName": "Artículos sin Ventas en un Período",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05022",
                  "syMenuName": "Listado de Artículos Sustitutos",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05023",
                  "syMenuName": "Líneas sin movimientos por Rango",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05024",
                  "syMenuName": "Líneas sin movimientos en Detalle",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05025",
                  "syMenuName": "Control de Pago del almacenaje",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05026",
                  "syMenuName": "Stock Físico Valorizado",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05027",
                  "syMenuName": "Stock Físico / Costos",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05028",
                  "syMenuName": "Ventas de Cliente por Modelo",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05029",
                  "syMenuName": "Listado Series/Lotes x Orden Compra",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05030",
                  "syMenuName": "Listado Series/Lotes x Artículo c/Stock",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05031",
                  "syMenuName": "TCM - Localización",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05032",
                  "syMenuName": "TCM - Localizacion - T.Operación",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05033",
                  "syMenuName": "Categoría - Localización",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05034",
                  "syMenuName": "Categoría - Localización - T.Operación",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05035",
                  "syMenuName": "Detalle de Guías de Despacho",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05036",
                  "syMenuName": "Listado T.Operación Almacén Stock Saldo",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05037",
                  "syMenuName": "Inventarios de Usufructo",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05038",
                  "syMenuName": "Comparativo de Pesos Teórico Vs Real",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05039",
                  "syMenuName": "Productos Terminados",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05040",
                  "syMenuName": "Comparativo de Pesos",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05N02",
                  "syMenuName": "Reportes Valorizados",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05N03",
                  "syMenuName": "Reportes de Sistema",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M02S05N04",
                  "syMenuName": "Reportes de S/L",
                  "syMenuParent": "M02S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M03",
          "syMenuName": "Monedas",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M03S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M03",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M03S01N01",
                  "syMenuName": "Mantener Monedas",
                  "syMenuParent": "M03S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M03S01N02",
                  "syMenuName": "Configura Diferencia en Cambio",
                  "syMenuParent": "M03S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M03S01N10",
                  "syMenuName": "Configura Mod.Monedas",
                  "syMenuParent": "M03S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M03S02",
              "syMenuName": "Ver",
              "syMenuParent": "M03",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M03S02N01",
                  "syMenuName": "Mantener Monedas",
                  "syMenuParent": "M03S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M03S02N02",
                  "syMenuName": "Ver Tipos de Cambio Monetarios",
                  "syMenuParent": "M03S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M03S03",
              "syMenuName": "Trx",
              "syMenuParent": "M03",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M03S03N01",
                  "syMenuName": "Ingreso de Tipos de Cambio Monetarios",
                  "syMenuParent": "M03S03",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M03S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M03",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M03S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M03",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            }
          ]
        },
        {
          "syMenuCode": "M04",
          "syMenuName": "Contabilidad General",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M04S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M04",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M04S01N01",
                  "syMenuName": "Fuentes",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N02",
                  "syMenuName": "Contabilidad Analítica",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N03",
                  "syMenuName": "Contabilidad Analítica (General/Anual)",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N04",
                  "syMenuName": "Diseño de EEFF",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N05",
                  "syMenuName": "Especificaciones de EEFF",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N06",
                  "syMenuName": "Ctas.Acum.Contables de Costos",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N07",
                  "syMenuName": "Cuentas de Control",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S01N10",
                  "syMenuName": "Configura Mod.Contabilidad",
                  "syMenuParent": "M04S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M04S02",
              "syMenuName": "Ver",
              "syMenuParent": "M04",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M04S02N01",
                  "syMenuName": "Fuentes",
                  "syMenuParent": "M04S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S02N02",
                  "syMenuName": "Contabilidad Analítica",
                  "syMenuParent": "M04S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S02N03",
                  "syMenuName": "GL View",
                  "syMenuParent": "M04S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M04S03",
              "syMenuName": "Trx",
              "syMenuParent": "M04",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M04S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M04",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M04S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M04",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M04S05007",
                  "syMenuName": "Registros Auxiliares",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05008",
                  "syMenuName": "Diario General de Operaciones",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05009",
                  "syMenuName": "Acumulado Diario Oficial",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05010",
                  "syMenuName": "Saldo x Cuenta",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05011",
                  "syMenuName": "Trx Contables No Asentadas & Asentadas",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05012",
                  "syMenuName": "Póliza Contable",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05013",
                  "syMenuName": "Análisis de Cuentas",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05014",
                  "syMenuName": "Analisis por Centros de Costo",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05015",
                  "syMenuName": "Transacciones No Asentadas",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05016",
                  "syMenuName": "Inventarios Balances",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05017",
                  "syMenuName": "Balance de Comprobación",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05018",
                  "syMenuName": "Cuadre en M.Local Cuentas-Banco",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05019",
                  "syMenuName": "Estado de Ganancia y Pérdida",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05020",
                  "syMenuName": "Inventario y Balance Resumen",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05021",
                  "syMenuName": "Balance de Comprobación Anual x Nivel",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05022",
                  "syMenuName": "Balance Columnado (Acumulado)",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05023",
                  "syMenuName": "Movimientos Contables x Monto",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05024",
                  "syMenuName": "Distribución AR",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05025",
                  "syMenuName": "Reportes Bancos",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05026",
                  "syMenuName": "Cuadre de Inventarios",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05027",
                  "syMenuName": "Libro Caja y Bancos",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05028",
                  "syMenuName": "Análisis de Cuentas Analíticas ( 6 y 9 )",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05029",
                  "syMenuName": "Análisis de Cuentas Analíticas ( 6 y 9 ) Detallado",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05030",
                  "syMenuName": "Registro Contable",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05031",
                  "syMenuName": "Libro Mayor Auxiliar",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05035",
                  "syMenuName": "IB-Anexo Detalle de Caja",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05036",
                  "syMenuName": "IB Anexos Detalle de CxC",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05037",
                  "syMenuName": "IB Anexos Detalle de existencias",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05038",
                  "syMenuName": "IB Anexos Detalle de CxP",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05039",
                  "syMenuName": "Asiento Contables",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05040",
                  "syMenuName": "Registro  Recibos por Honorarios-Cierre",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05N01",
                  "syMenuName": "Reportes GL(Contabilidad General)",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05N02",
                  "syMenuName": "Registro de Compras",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05N03",
                  "syMenuName": "Registro de Ventas",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05N04",
                  "syMenuName": "Exportar Registros Contables",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05N05",
                  "syMenuName": "EEFF",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M04S05N06",
                  "syMenuName": "Reporte de Percepciones",
                  "syMenuParent": "M04S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M05",
          "syMenuName": "Cuentas por Cobrar",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M05S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M05",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M05S01N01",
                  "syMenuName": "Mantener Ctas. Clientes",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N02",
                  "syMenuName": "Mantener Tipos de Cliente",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N03",
                  "syMenuName": "Mantener Vendedores",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N04",
                  "syMenuName": "Códigos de Condiciones",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N05",
                  "syMenuName": "Códigos de Servicios",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N06",
                  "syMenuName": "Direcciones Alternas",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N08",
                  "syMenuName": "Códigos de Transporte",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N10",
                  "syMenuName": "Origen de LXC de Partidas Abiertas",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N11",
                  "syMenuName": "Mantener Clientes x Créditos",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N12",
                  "syMenuName": "AR Partidas Abiertas",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N13",
                  "syMenuName": "AR Partidas Abiertas Letras",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N15",
                  "syMenuName": "Contactos",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S01N20",
                  "syMenuName": "Configura Cuentas por Cobrar",
                  "syMenuParent": "M05S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M05S02",
              "syMenuName": "Ver",
              "syMenuParent": "M05",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M05S02N01",
                  "syMenuName": "Mantener Ctas. Clientes",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N02",
                  "syMenuName": "Mantener Tipos de Cliente",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N03",
                  "syMenuName": "Mantener Vendedores",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N04",
                  "syMenuName": "Códigos de Condiciones",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N05",
                  "syMenuName": "Códigos de Servicios",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N06",
                  "syMenuName": "Direcciones Alternas",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N08",
                  "syMenuName": "Códigos de Transporte",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N18",
                  "syMenuName": "Facturación Electrónica - Consulta",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N19",
                  "syMenuName": "Ver Dep./Chk./Aplicaciones",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S02N20",
                  "syMenuName": "Ver CxC",
                  "syMenuParent": "M05S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M05S03",
              "syMenuName": "Trx",
              "syMenuParent": "M05",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M05S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M05",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M05S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M05",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M05S05003",
                  "syMenuName": "Depósitos Ingreados en el Día - 001",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05004",
                  "syMenuName": "Resumen Operaciones de un Dia - 004",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05005",
                  "syMenuName": "Listado de Cargo de reparto de documentos  - 003",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05006",
                  "syMenuName": "Listado de Cargo de cobranza- 005",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05007",
                  "syMenuName": "Listado de Letras por aceptar por Cliente - 011",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05008",
                  "syMenuName": "Condiciones de Pago - 002",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05009",
                  "syMenuName": "Listado de Aplicaciones del Día (Depósitos) - 006",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05010",
                  "syMenuName": "Listado de Aplicaciones del Día (NC) - 007",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05011",
                  "syMenuName": "Listado de Letras Aceptadas - 012",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05012",
                  "syMenuName": "Cargo de Envío a Banco - 013",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05013",
                  "syMenuName": "Planilla de Garantía, Descuento y Cobranza Libre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05014",
                  "syMenuName": "Listado de Movimientos de un Clientes -010",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05015",
                  "syMenuName": "Listado de Letras por Protestar - 015",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05016",
                  "syMenuName": "Documentos Sobreaplicados - 032",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05017",
                  "syMenuName": "Cobranza por Territorio",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05018",
                  "syMenuName": "Letras por Cobrar",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05019",
                  "syMenuName": "Seguimiento de Letras",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05020",
                  "syMenuName": "Facturas con Guías",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05021",
                  "syMenuName": "Letras x Cobrar",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05022",
                  "syMenuName": "Listado de Registro de Cheques Devueltos - 014",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05023",
                  "syMenuName": "Listado de Registro de Anticipos - 016",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05024",
                  "syMenuName": "Listado de Intereses Moratorios - 009",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05025",
                  "syMenuName": "Listado de Descuentos por Pronto Pago -008",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05026",
                  "syMenuName": "Ventas por Forma de Pago - E01",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05027",
                  "syMenuName": "Ajuste de Centavos - 019",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05028",
                  "syMenuName": "Gestión de Documentos",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05029",
                  "syMenuName": "Cuadro Resumen Cta Cte - 022",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05030",
                  "syMenuName": "Detalle movimientos Cta Cte - 023",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05031",
                  "syMenuName": "Listado de Doc sin aplicar - 024",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05032",
                  "syMenuName": "Facturas por Asentar a la Cta Cte - 025",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05033",
                  "syMenuName": "Estados de Cuenta - 026",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05034",
                  "syMenuName": "Liquidación de Canje de Deuda",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05035",
                  "syMenuName": "Dietario",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05036",
                  "syMenuName": "Planilla de Aplicaciones",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05037",
                  "syMenuName": "Ranking de Morosidad",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05038",
                  "syMenuName": "Listado de Documentos por Cobrar",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05039",
                  "syMenuName": "Carga de Partidas Abiertas de Letras",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05040",
                  "syMenuName": "Listado de Documentos",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05041",
                  "syMenuName": "Documentos por Cobrar Vencidos en Cartera",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05042",
                  "syMenuName": "Cuadro Resumen de Ctas.por Cobrar en Mon.No Local",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05043",
                  "syMenuName": "Cuadro Resumen Letras en Banco",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05044",
                  "syMenuName": "Listado de Cuentas por Cobrar por Tipo Documento",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05045",
                  "syMenuName": "Listado de Ctas.x Cobrar por Cliente y Tipo Doc.",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05046",
                  "syMenuName": "Listado de Letras por Estado y Seguimiento en Bco",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05047",
                  "syMenuName": "Listado de Documentos por Antiguedad",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05048",
                  "syMenuName": "Saldos de Cta Corriente",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05049",
                  "syMenuName": "Ventas por Forma de Pago",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05050",
                  "syMenuName": "Cobranza Real / No Real",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05051",
                  "syMenuName": "Proyeccion de Cobranzas",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05052",
                  "syMenuName": "Listado de Documentos por Cobrar-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05053",
                  "syMenuName": "Cuadro Resumen Letras-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05054",
                  "syMenuName": "Listado por Tipo de Documentos-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05055",
                  "syMenuName": "Cuadro Resumen Ctas x Cob. en USD-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05056",
                  "syMenuName": "Documentos Vencidos en Cartera-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05057",
                  "syMenuName": "Ctas x Cobrar x Cliente/Tipo Doc-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05058",
                  "syMenuName": "Registro de Letras x Cobrar-Cierre",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05059",
                  "syMenuName": "Registro de Ventas",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05060",
                  "syMenuName": "RV-Anexo de Nota de Crédito(Referencia Factura)",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05061",
                  "syMenuName": "RV - Anexo de Título Gratuito",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05062",
                  "syMenuName": "Anticipos Clientes",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M05S05N02",
                  "syMenuName": "Registro de Ventas",
                  "syMenuParent": "M05S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M06",
          "syMenuName": "Cuentas por Pagar",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M06S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M06",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M06S01N01",
                  "syMenuName": "Mantener Ctas. Proveedores",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N02",
                  "syMenuName": "Códigos Fob",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N03",
                  "syMenuName": "Mantener Medio de Envío",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N04",
                  "syMenuName": "Mantener Condiciones",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N05",
                  "syMenuName": "Tipos de Proveedores",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N06",
                  "syMenuName": "Direcciones Alternas",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N07",
                  "syMenuName": "Partidas Abiertas",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N08",
                  "syMenuName": "Registro de Cajeros",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N09",
                  "syMenuName": "Registro de Cajas",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N10",
                  "syMenuName": "Grupos de Cuentas x Pagar",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N11",
                  "syMenuName": "Partidas Abiertas de Cuentas x Pagar",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N12",
                  "syMenuName": "Grupo Caja Línea",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N13",
                  "syMenuName": "Agrupador Logístico Financiero",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N14",
                  "syMenuName": "Control de Conformidad  de PO/AP",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N15",
                  "syMenuName": "Tipos de documentos Relacionados",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N16",
                  "syMenuName": "Relaciones de Cuentas Proveedores",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N17",
                  "syMenuName": "Reglas de Cuentas para Rendiciones",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N18",
                  "syMenuName": "Códigos de Precios",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S01N20",
                  "syMenuName": "Configura Cuentas por Pagar",
                  "syMenuParent": "M06S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M06S02",
              "syMenuName": "Ver",
              "syMenuParent": "M06",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M06S02N01",
                  "syMenuName": "Mantener Ctas. Proveedores",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S02N02",
                  "syMenuName": "Códigos Fob",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S02N03",
                  "syMenuName": "Mantener Medio de Envío",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S02N04",
                  "syMenuName": "Mantener Condiciones",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S02N05",
                  "syMenuName": "Tipos de Proveedores",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S02N06",
                  "syMenuName": "Direcciones Alternas",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S02N07",
                  "syMenuName": "Ver CxP Cuentas por Pagar",
                  "syMenuParent": "M06S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M06S03",
              "syMenuName": "Trx",
              "syMenuParent": "M06",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M06S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M06",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M06S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M06",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M06S05005",
                  "syMenuName": "Situaciones de Letras x Pagar",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05006",
                  "syMenuName": "Situaciones de Letras x Pagar no Asentadas",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05007",
                  "syMenuName": "Letras por Pagar en Banco",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05008",
                  "syMenuName": "Estado de Cuenta por Cliente de Letras x Pagar",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05009",
                  "syMenuName": "Cronograma de Pagos",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05010",
                  "syMenuName": "Distribución de Documentos por Cuenta",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05011",
                  "syMenuName": "Distribución de Documentos por Proveedor",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05012",
                  "syMenuName": "Estadístico Proveedores",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05013",
                  "syMenuName": "Liquidación de Canje de Deuda",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05014",
                  "syMenuName": "Distribución de Documentos por Centro Costo",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05015",
                  "syMenuName": "Listado de Cheques Girados",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05016",
                  "syMenuName": "Partida Abiertas por  Proveedor por Moneda",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05017",
                  "syMenuName": "Canje de Documentos por Letras",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05018",
                  "syMenuName": "Listado de Facturas Canceladas",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05019",
                  "syMenuName": "Retenciones",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05020",
                  "syMenuName": "Liquidación de Canje de Deuda 2",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05021",
                  "syMenuName": "Distribución a G/L",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05022",
                  "syMenuName": "Provisión con PP/SF",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05023",
                  "syMenuName": "Documentos con Cargo a Cliente(s)",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05024",
                  "syMenuName": "Cuenta Corriente Proveedores Facturas-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05025",
                  "syMenuName": "Registro  Recibos por Honorarios-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05026",
                  "syMenuName": "Facturas Distrib. Contabilizadas-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05027",
                  "syMenuName": "Registro Transferencia al COP",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05028",
                  "syMenuName": "Canjes de Letras/Avisos Asentados-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05029",
                  "syMenuName": "Canjes de Letras/Avisos No Asenta-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05030",
                  "syMenuName": "Avisos de Débitos Pendientes-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05031",
                  "syMenuName": "Control de Detracciones-Cierre",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05032",
                  "syMenuName": "Pagos Generales",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05033",
                  "syMenuName": "Ctas.x Pagar Nacional (Facturas/Letras Pendientes)",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05034",
                  "syMenuName": "Cuentas x Pagar al Exterior",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05035",
                  "syMenuName": "Pagaré - Carta de Crédito ( Pendientes)",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05036",
                  "syMenuName": "Cuenta Por Pagar por Período",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05037",
                  "syMenuName": "Distribución a Contabilidad",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05038",
                  "syMenuName": "Consolidado de Pago por Proveedores",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05039",
                  "syMenuName": "Corte de Chequera",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05040",
                  "syMenuName": "Cheques Diferidos",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05041",
                  "syMenuName": "Listado Liquidación de Caja",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05042",
                  "syMenuName": "Cuentas por Pagar por Períodos - ALF",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05043",
                  "syMenuName": "CxP de Tipos de documentos Relacionados",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05044",
                  "syMenuName": "Documentos Vinculados en AP",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05045",
                  "syMenuName": "Análisis de Cuentas",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05046",
                  "syMenuName": "Listado de Conformidades",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05047",
                  "syMenuName": "Análisis de Pagos a Proveedores - I",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05048",
                  "syMenuName": "Análisis de Pagos a Proveedores - II - CPP",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05N02",
                  "syMenuName": "Reportes de Sistemas",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05N03",
                  "syMenuName": "Registro de Provisiones",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05N04",
                  "syMenuName": "Registro de Compras",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05N05",
                  "syMenuName": "Resúmen de Compras por Proveedor",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M06S05N06",
                  "syMenuName": "Reporte de Precios",
                  "syMenuParent": "M06S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M07",
          "syMenuName": "Libro Bancos",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M07S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M07",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M07S01N01",
                  "syMenuName": "Código Tipo Trx. Bancaria",
                  "syMenuParent": "M07S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S01N03",
                  "syMenuName": "Relación entre Cuentas Caja",
                  "syMenuParent": "M07S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S01N06",
                  "syMenuName": "Partidas Abiertas",
                  "syMenuParent": "M07S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S01N07",
                  "syMenuName": "Conceptos de Pago Venta Mostrador",
                  "syMenuParent": "M07S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S01N08",
                  "syMenuName": "Concepto VM",
                  "syMenuParent": "M07S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S01N10",
                  "syMenuName": "Configura Libro Bancos",
                  "syMenuParent": "M07S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M07S02",
              "syMenuName": "Ver",
              "syMenuParent": "M07",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M07S02N01",
                  "syMenuName": "Tipo Transacción Bancaria",
                  "syMenuParent": "M07S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S02N02",
                  "syMenuName": "Ver Partidas de Libro Bancos",
                  "syMenuParent": "M07S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M07S03",
              "syMenuName": "Trx",
              "syMenuParent": "M07",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M07S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M07",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M07S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M07",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M07S05003",
                  "syMenuName": "Depósitos ingresados en el Día",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05004",
                  "syMenuName": "Depósitos Aplicados",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05005",
                  "syMenuName": "Posicionamiento en Bancos",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05006",
                  "syMenuName": "Trx Bancarias Sin Asentar",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05007",
                  "syMenuName": "Listado de Transacciones por Fecha",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05008",
                  "syMenuName": "Grupo de Transacciones",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05009",
                  "syMenuName": "Libro Caja y Bancos",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05010",
                  "syMenuName": "Trx Bancarias relacionadas a Depósitos",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M07S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M07S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M08",
          "syMenuName": "Lista de Materiales",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M08S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M08",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M08S01N01",
                  "syMenuName": "Ingreso de Lista Materiales",
                  "syMenuParent": "M08S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M08S01N02",
                  "syMenuName": "Lista Materiales - SF",
                  "syMenuParent": "M08S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M08S01N03",
                  "syMenuName": "Lista Materiales - MP",
                  "syMenuParent": "M08S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M08S01N10",
                  "syMenuName": "Configura Lista Materiales",
                  "syMenuParent": "M08S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M08S02",
              "syMenuName": "Ver",
              "syMenuParent": "M08",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M08S02N01",
                  "syMenuName": "Ver Lista de Materiales Identada",
                  "syMenuParent": "M08S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M08S03",
              "syMenuName": "Trx",
              "syMenuParent": "M08",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M08S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M08",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M08S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M08",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            }
          ]
        },
        {
          "syMenuCode": "M09",
          "syMenuName": "Ordenes de Producción",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M09S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M09",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M09S01N01",
                  "syMenuName": "TCVA Tipo Costo Valor Agregado V/A",
                  "syMenuParent": "M09S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M09S01N10",
                  "syMenuName": "Configura Ordenes de Producción",
                  "syMenuParent": "M09S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M09S02",
              "syMenuName": "Ver",
              "syMenuParent": "M09",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M09S02N01",
                  "syMenuName": "TCVA Tipo Costo Valor Agregado V/A",
                  "syMenuParent": "M09S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M09S02N02",
                  "syMenuName": "Visualizador de Producción",
                  "syMenuParent": "M09S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M09S03",
              "syMenuName": "Trx",
              "syMenuParent": "M09",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M09S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M09",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M09S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M09",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M09S05N01",
                  "syMenuName": "Reporte de Producción",
                  "syMenuParent": "M09S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M10",
          "syMenuName": "Ordenes de Compra",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M10S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M10",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M10S01N01",
                  "syMenuName": "Códigos de Comentarios",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N02",
                  "syMenuName": "Códigos de Razón de Rechazo",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N03",
                  "syMenuName": "Códigos de Envío a",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N04",
                  "syMenuName": "Códigos Inspeción Recepción",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N05",
                  "syMenuName": "Mant.Disposición Revisión de Material",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N06",
                  "syMenuName": "Código de Tolerancia",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N07",
                  "syMenuName": "Mantenimiento Costo Total de Envío",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N08",
                  "syMenuName": "Planificador de Compras",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N09",
                  "syMenuName": "Costos de Envío/Items",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N10",
                  "syMenuName": "AP Proveedores/Item",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S01N20",
                  "syMenuName": "Configura Compras",
                  "syMenuParent": "M10S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M10S02",
              "syMenuName": "Ver",
              "syMenuParent": "M10",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M10S02N01",
                  "syMenuName": "Códigos de Comentarios",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N02",
                  "syMenuName": "Códigos de Razón de Rechazo",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N03",
                  "syMenuName": "Códigos de Envío a",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N04",
                  "syMenuName": "Códigos Inspeción Recepción",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N05",
                  "syMenuName": "Mant.Disposición Revisión de Material",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N06",
                  "syMenuName": "Código de Tolerancia",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N07",
                  "syMenuName": "Mantenimiento Costo Total de Envío",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N08",
                  "syMenuName": "Planificador de Compras",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S02N09",
                  "syMenuName": "VER Ordenes de Compras",
                  "syMenuParent": "M10S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M10S03",
              "syMenuName": "Trx",
              "syMenuParent": "M10",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M10S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M10",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M10S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M10",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M10S05003",
                  "syMenuName": "Listados de O.Compra - 010",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05004",
                  "syMenuName": "Pagos por Derechos - 003",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05005",
                  "syMenuName": "Fletes por Pagar - 004",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05006",
                  "syMenuName": "Inspecciones por Pagar - 005",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05007",
                  "syMenuName": "Letras Aceptadas - 006",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05008",
                  "syMenuName": "Crédito Directo - 007",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05009",
                  "syMenuName": "Costos Totales de Envio x OC - 009",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05010",
                  "syMenuName": "Remisiones x OC x Proveedor - 011",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05011",
                  "syMenuName": "OC Costeadas",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05012",
                  "syMenuName": "Reclamos OC",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05013",
                  "syMenuName": "Planif. Recep. OC Costeadas",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05014",
                  "syMenuName": "Recepciones OC Costeadas",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05015",
                  "syMenuName": "OC Sin Costos",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05016",
                  "syMenuName": "OC Maestras",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05017",
                  "syMenuName": "Planif. OC - Formas de Pago",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05018",
                  "syMenuName": "Detalle Importaciones con Factura",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05019",
                  "syMenuName": "Detalle de Importaciones Artículos - Factura",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05020",
                  "syMenuName": "Histórico Unitario de Compras",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05021",
                  "syMenuName": "Histórico Total de Compras",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05022",
                  "syMenuName": "Detalle de Importaciones Articulos N",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05023",
                  "syMenuName": "Planificador de Recepciones de OC Costeada",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05024",
                  "syMenuName": "Reporte de Mercadería por LLegar",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05025",
                  "syMenuName": "Situación de Ordenes de Compra",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05026",
                  "syMenuName": "Ordenes Pendientes de Aprobación",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05027",
                  "syMenuName": "Ordenes de Compra por Estados y Pendientes",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05028",
                  "syMenuName": "Costeo por Partes - PO - PRI",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05029",
                  "syMenuName": "Importaciones, con-sin costos ajustados",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05030",
                  "syMenuName": "Compras Pendientes por Recibir",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05031",
                  "syMenuName": "Listados Generales - Compras",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05032",
                  "syMenuName": "Costos de Envío sin Cancelar",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M10S05N02",
                  "syMenuName": "Reportes de Sistema",
                  "syMenuParent": "M10S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M11",
          "syMenuName": "Pedidos y Facturación",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M11S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M11",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M11S01N01",
                  "syMenuName": "Cta. Categoría Prod/Localización",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N02",
                  "syMenuName": "Art. Clientes",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N03",
                  "syMenuName": "Códigos Comentarios",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N04",
                  "syMenuName": "Códigos de Precios",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N05",
                  "syMenuName": "Cta. Categoría Prod/Localización/TO",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N06",
                  "syMenuName": "Valores de Tasas",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N07",
                  "syMenuName": "Cajas Registradoras",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N08",
                  "syMenuName": "Series de Producto",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N09",
                  "syMenuName": "Partidas Arancelarias",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S01N20",
                  "syMenuName": "Configura Pedidos y Facturación",
                  "syMenuParent": "M11S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M11S02",
              "syMenuName": "Ver",
              "syMenuParent": "M11",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M11S02N01",
                  "syMenuName": "Cta. Categoría Prod/Localización",
                  "syMenuParent": "M11S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S02N02",
                  "syMenuName": "Art. Clientes",
                  "syMenuParent": "M11S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S02N03",
                  "syMenuName": "Códigos Comentarios",
                  "syMenuParent": "M11S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S02N04",
                  "syMenuName": "Códigos de Precios",
                  "syMenuParent": "M11S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S02N05",
                  "syMenuName": "VER Ordenes de Venta",
                  "syMenuParent": "M11S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S02N06",
                  "syMenuName": "Order View",
                  "syMenuParent": "M11S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M11S03",
              "syMenuName": "Trx",
              "syMenuParent": "M11",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M11S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M11",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M11S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M11",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M11S05006",
                  "syMenuName": "Cumplimiento de Ventas por Zona acumulado",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05007",
                  "syMenuName": "Cumplimiento por Vendedor Zona Cliente",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05008",
                  "syMenuName": "Cumplimiento por Modelo",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05009",
                  "syMenuName": "Cumplimiento por Modelo Cliente",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05010",
                  "syMenuName": "Cumplimiento por Vendedor Modelo",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05011",
                  "syMenuName": "Estadístico de Ventas por Modelo Mes",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05012",
                  "syMenuName": "Estadístico de Ventas por Cliente Modelo",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05013",
                  "syMenuName": "Estadístico de Ventas por Item.Cliente",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05014",
                  "syMenuName": "Estadístico de Vtas.x Item.Cliente(n últimas vtas)",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05015",
                  "syMenuName": "Estadístico de Ventas por Vendedor Cliente Modelo",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05016",
                  "syMenuName": "Resumen de Ventas por Cliente",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05017",
                  "syMenuName": "Reporte de Ventas",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05018",
                  "syMenuName": "Facturas de Servicios",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05019",
                  "syMenuName": "Comparación PO - OE",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05020",
                  "syMenuName": "Reporte Orden Venta",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05021",
                  "syMenuName": "Créditos por Valor",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05022",
                  "syMenuName": "Notas Crédito x Ventas Diferidas",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05023",
                  "syMenuName": "Cambios de Cantidades ordenadas en Pedidos",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05024",
                  "syMenuName": "Estadística Diaria por Mes Vendedor",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05025",
                  "syMenuName": "Ventas por Cliente por Modelo de Fecha a Fecha",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05028",
                  "syMenuName": "Artículos Facturados entre Fecha y Fecha",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05029",
                  "syMenuName": "Cumplimiento de Ventas por Zona acumulado",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05030",
                  "syMenuName": "Margenes de Venta por Modelo a una Fecha.",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05031",
                  "syMenuName": "Margenes de Venta por Vendedor, Modelo a una Fecha",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05032",
                  "syMenuName": "Variación de Facturación VS Precio de Lista",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05042",
                  "syMenuName": "Costo de Ventas por Artículo - De Facturacion",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05043",
                  "syMenuName": "Costo de Ventas por Artículo - De Kardex",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05046",
                  "syMenuName": "Impresión de Orden Venta",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05047",
                  "syMenuName": "Costo de Ventas por Artículo - De Facturacion",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05048",
                  "syMenuName": "Costo de Ventas por Artículo - De Kardex",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05050",
                  "syMenuName": "Control de Despachos",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05051",
                  "syMenuName": "Ventas Diferidas",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05052",
                  "syMenuName": "Facturación de Cierre de Período",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05053",
                  "syMenuName": "Matriz Resumen",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05054",
                  "syMenuName": "Control de exportaciones embarcadas",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05055",
                  "syMenuName": "Facturas de exportación no vinculadas a DUAs",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05056",
                  "syMenuName": "Proyección de Facturación",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05057",
                  "syMenuName": "Estado de Ordenes de Venta",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05058",
                  "syMenuName": "Facturación de Cierre de Periodo",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05059",
                  "syMenuName": "Consumos por Centro de Costo-LOC",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05060",
                  "syMenuName": "Matriz Resumen TCM Ventas",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05061",
                  "syMenuName": "Guías Despachos Detallado",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05062",
                  "syMenuName": "Estado de Ordenes de venta",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05063",
                  "syMenuName": "Proyección de Facturación",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05064",
                  "syMenuName": "Reporte de Cierre de Caja Registradora",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05065",
                  "syMenuName": "Listado  Costos Envío OE",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05066",
                  "syMenuName": "Reporte de Ventas - Distributivo",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05067",
                  "syMenuName": "Margenes de Ventas",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05068",
                  "syMenuName": "Ventas Análisis",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05069",
                  "syMenuName": "Listado DrawBack",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05N02",
                  "syMenuName": "Reportes Gerenciales",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05N03",
                  "syMenuName": "Impresión de Orden de Venta",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M11S05N04",
                  "syMenuName": "Reportes Pers.",
                  "syMenuParent": "M11S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M12",
          "syMenuName": "Programación Maestra",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M12S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M12",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M12S01N20",
                  "syMenuName": "Conf. Programa Maestro (M/S)",
                  "syMenuParent": "M12S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M12S02",
              "syMenuName": "Ver",
              "syMenuParent": "M12",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M12S02N01",
                  "syMenuName": "Disponible a Prometer",
                  "syMenuParent": "M12S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M12S03",
              "syMenuName": "Trx",
              "syMenuParent": "M12",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M12S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M12",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M12S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M12",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M12S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M12S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M13",
          "syMenuName": "MRP",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M13S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M13",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M13S01N20",
                  "syMenuName": "Conf. MRP",
                  "syMenuParent": "M13S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M13S02",
              "syMenuName": "Ver",
              "syMenuParent": "M13",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M13S03",
              "syMenuName": "Trx",
              "syMenuParent": "M13",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M13S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M13",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M13S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M13",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M13S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M13S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M14",
          "syMenuName": "Planificación de Requerimientos de Capacidad (CRP)",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M14S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M14",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M14S01N20",
                  "syMenuName": "Conf. CRP",
                  "syMenuParent": "M14S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M14S02",
              "syMenuName": "Ver",
              "syMenuParent": "M14",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M14S03",
              "syMenuName": "Trx",
              "syMenuParent": "M14",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M14S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M14",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M14S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M14",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M14S05N01",
                  "syMenuName": "Reporte de Capacidad",
                  "syMenuParent": "M14S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M14S05N02",
                  "syMenuName": "Carga y Backlog",
                  "syMenuParent": "M14S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M15",
          "syMenuName": "Contabilidad Costos de Manufactura",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M15S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M15",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M15S01N01",
                  "syMenuName": "Conceptos MC - Almacenes MC",
                  "syMenuParent": "M15S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M15S01N20",
                  "syMenuName": "Conf. Contabilidad Costos de Manufactura (MCA)",
                  "syMenuParent": "M15S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M15S02",
              "syMenuName": "Ver",
              "syMenuParent": "M15",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M15S02N01",
                  "syMenuName": "Ver MC.Orden de Planta/SF&WO",
                  "syMenuParent": "M15S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M15S03",
              "syMenuName": "Trx",
              "syMenuParent": "M15",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M15S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M15",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M15S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M15",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M15S05N01",
                  "syMenuName": "MC Reporte",
                  "syMenuParent": "M15S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M15S05N02",
                  "syMenuName": "Listados de Análisis P-G",
                  "syMenuParent": "M15S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M15S05N03",
                  "syMenuName": "Producción en Proceso",
                  "syMenuParent": "M15S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M15S05N04",
                  "syMenuName": "Análisis de SF & Trx. por SF",
                  "syMenuParent": "M15S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M15S05N05",
                  "syMenuName": "Estado de Costo de Producción y Ventas",
                  "syMenuParent": "M15S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M15S05N06",
                  "syMenuName": "Información Gerencial de Producción",
                  "syMenuParent": "M15S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M16",
          "syMenuName": "Control de Planta",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M16S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M16",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M16S01N01",
                  "syMenuName": "Grupos Categorías",
                  "syMenuParent": "M16S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S01N02",
                  "syMenuName": "Items/Loc costo referencial",
                  "syMenuParent": "M16S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S01N03",
                  "syMenuName": "Grupo Categorías de Sub-Insumos",
                  "syMenuParent": "M16S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S01N04",
                  "syMenuName": "Agrupador de TCM",
                  "syMenuParent": "M16S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S01N05",
                  "syMenuName": "Producción Normal",
                  "syMenuParent": "M16S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S01N20",
                  "syMenuName": "Conf. Control de Planta (SF)",
                  "syMenuParent": "M16S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M16S02",
              "syMenuName": "Ver",
              "syMenuParent": "M16",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M16S02N01",
                  "syMenuName": "Ver Orden de Planta/SF&WO",
                  "syMenuParent": "M16S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M16S03",
              "syMenuName": "Trx",
              "syMenuParent": "M16",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M16S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M16",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M16S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M16",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M16S05006",
                  "syMenuName": "Impresión de SF",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05007",
                  "syMenuName": "Grado de Avance de SF(Estado de Colores)",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05008",
                  "syMenuName": "Comparativo de Programación con Ejecución",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05009",
                  "syMenuName": "Productos Tratados por Período",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05010",
                  "syMenuName": "Proyección APT",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05011",
                  "syMenuName": "Ordenes Completadas",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05012",
                  "syMenuName": "Consumos por Centro de Costo",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05013",
                  "syMenuName": "Eficiencia Stand.vs.Real Und.Producción",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05014",
                  "syMenuName": "Estado Económico de Ordenes de Planta",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05015",
                  "syMenuName": "Costos por Orden de Planta",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05016",
                  "syMenuName": "IDD órdenes en proceso",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05017",
                  "syMenuName": "Control para Preparación de Despacho SF",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05018",
                  "syMenuName": "SF.BOM XBOM & SF.Ruta XRUTA",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05019",
                  "syMenuName": "SF WO por período",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05020",
                  "syMenuName": "Miscelaneos SF - Facturas",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05021",
                  "syMenuName": "Análisis de Provisiones de Ord de Planta",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05022",
                  "syMenuName": "Análisis WO - Acumulado de Consumos",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M16S05023",
                  "syMenuName": "Producción en Proceso",
                  "syMenuParent": "M16S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M17",
          "syMenuName": "Ruta de Programación Estandar",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M17S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M17",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M17S01N20",
                  "syMenuName": "Conf. Ruta de Programación Estandar(SPR)",
                  "syMenuParent": "M17S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M17S02",
              "syMenuName": "Ver",
              "syMenuParent": "M17",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M17S03",
              "syMenuName": "Trx",
              "syMenuParent": "M17",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M17S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M17",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M17S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M17",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M17S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M17S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M18",
          "syMenuName": "P.S.I. Proyección",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M18S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M18",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M18S01N01",
                  "syMenuName": "PV División",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S01N02",
                  "syMenuName": "PV Grupos",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S01N03",
                  "syMenuName": "PV Línea",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S01N04",
                  "syMenuName": "PV Tipos",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S01N05",
                  "syMenuName": "PV Categoría",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S01N06",
                  "syMenuName": "PV Relaciones",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S01N07",
                  "syMenuName": "Proyecto Ventas Maestros",
                  "syMenuParent": "M18S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M18S02",
              "syMenuName": "Ver",
              "syMenuParent": "M18",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M18S03",
              "syMenuName": "Trx",
              "syMenuParent": "M18",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M18S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M18",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M18S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M18",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M18S05002",
                  "syMenuName": "Lista de Precios",
                  "syMenuParent": "M18S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S05003",
                  "syMenuName": "Validación de Lista de Precios(Items sin revisión)",
                  "syMenuParent": "M18S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S05004",
                  "syMenuName": "Presupuesto de Unidades de Ventas por Vendedor",
                  "syMenuParent": "M18S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S05005",
                  "syMenuName": "Reposición Sugerida",
                  "syMenuParent": "M18S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S05N01",
                  "syMenuName": "Proyecto Ventas",
                  "syMenuParent": "M18S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M18S05N03",
                  "syMenuName": "Compras planif. Vs. Ordenes de Ventas",
                  "syMenuParent": "M18S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M19",
          "syMenuName": "Planillas",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M19S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M19",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M19S01N01",
                  "syMenuName": "Empleados",
                  "syMenuParent": "M19S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M19S01N02",
                  "syMenuName": "Grupo Empleados",
                  "syMenuParent": "M19S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M19S01N03",
                  "syMenuName": "Conceptos",
                  "syMenuParent": "M19S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M19S01N04",
                  "syMenuName": "Formulación",
                  "syMenuParent": "M19S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M19S01N90",
                  "syMenuName": "Conf.Planilla",
                  "syMenuParent": "M19S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M19S02",
              "syMenuName": "Ver",
              "syMenuParent": "M19",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M19S03",
              "syMenuName": "Trx",
              "syMenuParent": "M19",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M19S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M19",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M19S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M19",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M19S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M19S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M19S05N02",
                  "syMenuName": "Liquidación de Nómina",
                  "syMenuParent": "M19S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M19S05N03",
                  "syMenuName": "Préstamos & Boletas",
                  "syMenuParent": "M19S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M20",
          "syMenuName": "Flujo de Caja",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M20S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M20",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M20S01N01",
                  "syMenuName": "Maestros de Flujo",
                  "syMenuParent": "M20S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S01N02",
                  "syMenuName": "Conceptos de Flujo",
                  "syMenuParent": "M20S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S01N03",
                  "syMenuName": "Grupo de Flujos",
                  "syMenuParent": "M20S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S01N04",
                  "syMenuName": "Relaciones de Flujos",
                  "syMenuParent": "M20S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S01N05",
                  "syMenuName": "Relaciones de Cuentas",
                  "syMenuParent": "M20S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M20S02",
              "syMenuName": "Ver",
              "syMenuParent": "M20",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M20S03",
              "syMenuName": "Trx",
              "syMenuParent": "M20",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M20S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M20",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M20S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M20",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M20S05002",
                  "syMenuName": "Cuenta por Pagar por Período",
                  "syMenuParent": "M20S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S05003",
                  "syMenuName": "Posicionamiento en Bancos",
                  "syMenuParent": "M20S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S05004",
                  "syMenuName": "Listado de Documentos por Antigüedad",
                  "syMenuParent": "M20S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M20S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M20S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M21",
          "syMenuName": "Manufactura - General",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M21S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M21",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M21S01N01",
                  "syMenuName": "Items Representativos para El CGR",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N03",
                  "syMenuName": "Calendario de Planta",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N04",
                  "syMenuName": "Calendario Reporte",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N05",
                  "syMenuName": "Departamentos",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N06",
                  "syMenuName": "Centros de Trabajo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N07",
                  "syMenuName": "Tipo de Equipo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N08",
                  "syMenuName": "Máquinas",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N09",
                  "syMenuName": "Herramientas",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N10",
                  "syMenuName": "Grupo Cuenta De Centro De Trabajo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N11",
                  "syMenuName": "Tipo de Trabajo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N12",
                  "syMenuName": "Grado De Mano De Obra",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N13",
                  "syMenuName": "Tipo De Costo De Mano De Obra",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N14",
                  "syMenuName": "Grupo Productivo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N15",
                  "syMenuName": "Equipos De Trabajo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N16",
                  "syMenuName": "Perfil Del Producto",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N18",
                  "syMenuName": "Costo De Estructura Del Producto",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N19",
                  "syMenuName": "Código De Razón De Rechazo",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N20",
                  "syMenuName": "Código De Razón De Desecho",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N21",
                  "syMenuName": "Código De Operación",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N24",
                  "syMenuName": "Configuración de Manufactura",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M21S01N25",
                  "syMenuName": "Parámetros Generales de Manufactura",
                  "syMenuParent": "M21S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M21S02",
              "syMenuName": "Ver",
              "syMenuParent": "M21",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M21S03",
              "syMenuName": "Trx",
              "syMenuParent": "M21",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M21S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M21",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M21S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M21",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M21S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M21S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M22",
          "syMenuName": "Requisiciones",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M22S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M22",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M22S01N01",
                  "syMenuName": "Usuario Aprobador",
                  "syMenuParent": "M22S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S01N02",
                  "syMenuName": "Usuarios de Requisiciones",
                  "syMenuParent": "M22S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S01N10",
                  "syMenuName": "Configuracion RQ-CONS-QT",
                  "syMenuParent": "M22S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M22S02",
              "syMenuName": "Ver",
              "syMenuParent": "M22",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M22S02N01",
                  "syMenuName": "RQView",
                  "syMenuParent": "M22S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M22S03",
              "syMenuName": "Trx",
              "syMenuParent": "M22",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M22S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M22",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M22S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M22",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M22S05002",
                  "syMenuName": "Seguimiento de RQ-compra-recepción de mercadería",
                  "syMenuParent": "M22S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S05003",
                  "syMenuName": "Estadístico de Atencion de requerimientos",
                  "syMenuParent": "M22S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S05004",
                  "syMenuName": "Requisiciones - Análisis - I",
                  "syMenuParent": "M22S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S05005",
                  "syMenuName": "Requisiciones - Análisis - II",
                  "syMenuParent": "M22S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S05006",
                  "syMenuName": "Requisiciones - Análisis - III",
                  "syMenuParent": "M22S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M22S05N01",
                  "syMenuName": "Reportes",
                  "syMenuParent": "M22S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M23",
          "syMenuName": "Cotizaciones - Ventas",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M23S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M23",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M23S01N10",
                  "syMenuName": "Configuracion QS",
                  "syMenuParent": "M23S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M23S02",
              "syMenuName": "Ver",
              "syMenuParent": "M23",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M23S03",
              "syMenuName": "Trx",
              "syMenuParent": "M23",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M23S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M23",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M23S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M23",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M23S05N01",
                  "syMenuName": "Imprimir Cotización",
                  "syMenuParent": "M23S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M24",
          "syMenuName": "Proyectos",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M24S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M24",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M24S01N10",
                  "syMenuName": "Configuracion Proyectos",
                  "syMenuParent": "M24S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M24S02",
              "syMenuName": "Ver",
              "syMenuParent": "M24",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M24S03",
              "syMenuName": "Trx",
              "syMenuParent": "M24",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M24S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M24",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M24S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M24",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M24S05002",
                  "syMenuName": "Ficha del Proyecto",
                  "syMenuParent": "M24S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M24S05003",
                  "syMenuName": "Situación de proyecto",
                  "syMenuParent": "M24S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M25",
          "syMenuName": "Planificación de Mantenimiento",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M25S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M25",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M25S01N01",
                  "syMenuName": "Relación Activo/IMAs",
                  "syMenuParent": "M25S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S01N02",
                  "syMenuName": "Máquinas Vinculadas",
                  "syMenuParent": "M25S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S01N10",
                  "syMenuName": "Configuracion MP",
                  "syMenuParent": "M25S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M25S02",
              "syMenuName": "Ver",
              "syMenuParent": "M25",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M25S02N01",
                  "syMenuName": "MPView",
                  "syMenuParent": "M25S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M25S03",
              "syMenuName": "Trx",
              "syMenuParent": "M25",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M25S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M25",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M25S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M25",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M25S05002",
                  "syMenuName": "Ordenes de Trabajo",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S05003",
                  "syMenuName": "Planeamiento General",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S05004",
                  "syMenuName": "Plan de Mantenimiento",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S05005",
                  "syMenuName": "Ordenes Ejecutadas",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S05006",
                  "syMenuName": "Costos de Mantenimiento",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S05007",
                  "syMenuName": "Histórico de Ordenes",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M25S05008",
                  "syMenuName": "Capacidad por Horas",
                  "syMenuParent": "M25S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M26",
          "syMenuName": "Control de Calidad",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M26S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M26",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M26S01N01",
                  "syMenuName": "Estandares QC",
                  "syMenuParent": "M26S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M26S01N10",
                  "syMenuName": "Configuracion QC",
                  "syMenuParent": "M26S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M26S02",
              "syMenuName": "Ver",
              "syMenuParent": "M26",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M26S03",
              "syMenuName": "Trx",
              "syMenuParent": "M26",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M26S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M26",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M26S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M26",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M26S05N01",
                  "syMenuName": "Reportes QC",
                  "syMenuParent": "M26S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M27",
          "syMenuName": "Contratos",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M27S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M27",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M27S01N01",
                  "syMenuName": "Tipo de Contratos",
                  "syMenuParent": "M27S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M27S01N10",
                  "syMenuName": "Configuracion CT",
                  "syMenuParent": "M27S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M27S02",
              "syMenuName": "Ver",
              "syMenuParent": "M27",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M27S02N01",
                  "syMenuName": "Ver Contratos",
                  "syMenuParent": "M27S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M27S03",
              "syMenuName": "Trx",
              "syMenuParent": "M27",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M27S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M27",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M27S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M27",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M27S05N01",
                  "syMenuName": "Reporte de Contratos",
                  "syMenuParent": "M27S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M28",
          "syMenuName": "Facturación Masiva",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M28S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M28",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M28S01N01",
                  "syMenuName": "Conf.Facturación Masiva",
                  "syMenuParent": "M28S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M28S01N02",
                  "syMenuName": "Tipo de Facturación Masiva",
                  "syMenuParent": "M28S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M28S02",
              "syMenuName": "Ver",
              "syMenuParent": "M28",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M28S02N01",
                  "syMenuName": "Ver Facturación Masiva",
                  "syMenuParent": "M28S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M28S03",
              "syMenuName": "Trx",
              "syMenuParent": "M28",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M28S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M28",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M28S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M28",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M28S05N01",
                  "syMenuName": "Reporte Facturación Masiva",
                  "syMenuParent": "M28S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M29",
          "syMenuName": "Help Desk",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M29S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M29",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M29S01N01",
                  "syMenuName": "Tipo.HD",
                  "syMenuParent": "M29S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M29S01N10",
                  "syMenuName": "Conf.HD",
                  "syMenuParent": "M29S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M29S02",
              "syMenuName": "Ver",
              "syMenuParent": "M29",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M29S02N01",
                  "syMenuName": "Ver.HD",
                  "syMenuParent": "M29S02",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M29S03",
              "syMenuName": "Trx",
              "syMenuParent": "M29",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                },
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M29S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M29",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M29S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M29",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M29S05N01",
                  "syMenuName": "Reporte HD",
                  "syMenuParent": "M29S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        },
        {
          "syMenuCode": "M31",
          "syMenuName": "Planeamiento",
          "syMenuParent": "0",
          "syMenuLevel": 3,
          "syOpcActive": "Y",
          "children": [
            {
              "syMenuCode": "M31S01",
              "syMenuName": "Mantener",
              "syMenuParent": "M31",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M31S01N01",
                  "syMenuName": "Código Informativo Logístico - LIC",
                  "syMenuParent": "M31S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M31S01N02",
                  "syMenuName": "Rangos LIC",
                  "syMenuParent": "M31S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                },
                {
                  "syMenuCode": "M31S01N10",
                  "syMenuName": "Configuración PL",
                  "syMenuParent": "M31S01",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M31S02",
              "syMenuName": "Ver",
              "syMenuParent": "M31",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M31S03",
              "syMenuName": "Trx",
              "syMenuParent": "M31",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": null,
                  "syMenuName": "Revise el Tipo de Cambio del día",
                  "syMenuParent": null,
                  "syMenuLevel": 9,
                  "syOpcActive": "N",
                  "children": null
                }
              ]
            },
            {
              "syMenuCode": "M31S04",
              "syMenuName": "Procesos",
              "syMenuParent": "M31",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": []
            },
            {
              "syMenuCode": "M31S05",
              "syMenuName": "Reportes",
              "syMenuParent": "M31",
              "syMenuLevel": 6,
              "syOpcActive": "Y",
              "children": [
                {
                  "syMenuCode": "M31S05N01",
                  "syMenuName": "Listado LIC",
                  "syMenuParent": "M31S05",
                  "syMenuLevel": 9,
                  "syOpcActive": "Y",
                  "children": null
                }
              ]
            }
          ]
        }
      ];
      return of(menuData);
    }
}
