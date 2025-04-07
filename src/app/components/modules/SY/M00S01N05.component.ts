import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TreeNode } from '../../../models/treestandalone.module';
import { TreeviewComponent } from '../../usercontrol/treeview.component';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SystemadminService } from '../../../services/systemadmin.service';

@Component({
  selector: 'app-m00-s01-n05',
  imports: [TreeviewComponent],
  templateUrl: './m00s01n05.component.html',
  styleUrl: './m00s01n05.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class M00S01N05Component implements OnInit{
  treeData: TreeNode[] = [
    {
      "key": "M00",
      "label": "Administrador del Sistema",
      "data": "Administrador del Sistema",
      
      "children": [
        {
          "key": "M00S01",
          "label": "Mantener",
          "data": "Mantener",
          
          "children": [
            { "key": "M00S01N01", "label": "Configuración de Compañía", "icon": "pi pi-fw pi-file", "data": "Configuración de Compañía" },
            { "key": "M00S01N02", "label": "Períodos del Sistema", "icon": "pi pi-fw pi-file", "data": "Períodos del Sistema" },
            { "key": "M00S01N03", "label": "Cuentas Contables", "icon": "pi pi-fw pi-file", "data": "Cuentas Contables" }
          ]
        },
        {
          "key": "M00S02",
          "label": "Ver",
          "data": "Ver",
          
          "children": [
            { "key": "M00S02N02", "label": "Períodos del Sistema", "icon": "pi pi-fw pi-file", "data": "Períodos del Sistema" },
            { "key": "M00S02N03", "label": "Cuentas Contables", "icon": "pi pi-fw pi-file", "data": "Cuentas Contables" }
          ]
        }
      ]
    },
    {
      "key": "M01",
      "label": "Activos Fijos",
      "data": "Activos Fijos",
      
      "children": [
        {
          "key": "M01S01",
          "label": "Mantener",
          "data": "Mantener",
          "children": [
            { "key": "M01S01N01", "label": "Maestro de Activos", "icon": "pi pi-fw pi-file", "data": "Maestro de Activos" },
            { "key": "M01S01N02", "label": "División de Activos", "icon": "pi pi-fw pi-file", "data": "División de Activos" }
          ]
        }
      ]
    }
  ];
  constructor(private adminService: SystemadminService,private route: ActivatedRoute,private authService: AuthService) { }
  ngOnInit(): void {
    // Puedes inicializar cualquier dato o hacer una llamada a la API aquí si es necesario.
    /*this.route.queryParamMap.subscribe(params=>{
      this.titulo=params.get('syMenuName')||'';
    });*/
    this.authService.getMenu('ADMIN').subscribe((data: any[]) => {
      //this.files=this.transformToTreeNodes(data);
      this.treeData=this.transformToTreeNodes(data);
      this.treeData.forEach(n => this.setParents(n));
      //this.menu = this.setExpandedProperty(data);
      /*this.nodes = this.transformToTree(data);
      this.nodes = this.nodes.map(node => this.fixTreeStructure(node));*/
      //console.log(JSON.stringify(this.files, null, 2));
    });
  }
  transformToTreeNodes(data: any[]): TreeNode[] {
      return data.map(item => ({
        key:item.syMenuCode,
        label: item.syMenuName,
        data: item.syMenuCode,
        /*icon: 'pi pi-fw pi-inbox',*/
        children: item.children ? this.transformToTreeNodes(item.children) : [],
        selectable:true
        
      }));
    }

    setParents(node: TreeNode, parent: TreeNode | null = null) {
      node.parent = parent;
      if (node.children) {
        node.children.forEach(child => this.setParents(child, node));
      }
    }
}
