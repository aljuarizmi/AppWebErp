import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemadminService } from '../../../services/systemadmin.service';
import { AuthService } from '../../../services/auth.service';
import { MenuItem } from '../../../models/menu.model';
//import { Tree, TreeModule } from 'primeng/tree';
//import { TreeNode } from 'primeng/api';
import { TreeviewComponent } from '../../usercontrol/treeview.component';
import { TreeNode } from '../../../models/treestandalone.module';
import { Sygenacs, Sygenopc, Sygenusr } from '../../../models/systemadmin.model';
@Component({
  selector: 'app-m00-s01-n80',
  imports: [FormsModule,CommonModule,TreeviewComponent],
  /*schemas:[CUSTOM_ELEMENTS_SCHEMA],*/
  templateUrl: './m00s01n80.component.html',
  styleUrl: './m00s01n80.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true
})
export class M00S01N80Component implements OnInit{

  // Datos de ejemplo para los checkboxes
  usuarios!:Sygenusr[];
  /*usuarios = [
    { name: 'Usuario 1', selected: false },
    { name: 'Usuario 2', selected: false },
    { name: 'Usuario 3', selected: false }
  ];*/

  empresas! : Sygenacs[];/*[
    { name: 'Empresa A', selected: false },
    { name: 'Empresa B', selected: false },
    { name: 'Empresa C', selected: false }
  ];*/

  properties = [
    { name: 'Propiedad 1', selected: false },
    { name: 'Propiedad 2', selected: false },
    { name: 'Propiedad 3', selected: false }
  ];

  simpleNodes = [
    {
      id: '1',
      name: 'Node 1',
      children: [
        { id: '2', name: 'Child 1', children: [] },
        { id: '3', name: 'Child 2', children: [] }
      ]
    }
  ];
  titulo='';
  //menu: MenuItem[] = [];
  nodes: any[] = [];
  menu: MenuItem[] = [];

  files: TreeNode[]=[{
    "key": "M00",
      "label": "Administrador del Sistema",
      "data": "Administrador del Sistema",
      "children":[]
  }];
  treeData: TreeNode[]=[];
  selectedFiles!: TreeNode[];

  //@ViewChild(TreeComponent) tree!: TreeComponent;
  constructor(private adminService: SystemadminService,private route: ActivatedRoute,private authService: AuthService) { }

  ngOnInit(): void {
    // Puedes inicializar cualquier dato o hacer una llamada a la API aquí si es necesario.
    this.route.queryParamMap.subscribe(params=>{
      this.titulo=params.get('syMenuName')||'';
    });
    this.getUsuarios();
    this.getEmpresas();
    this.getAccesos();
  }

  getUsuarios(){
    this.adminService.obtenerUsuarios().subscribe({next:(data: Sygenusr[]) => {
      this.usuarios=data;
    },
    error: (error) => {
      alert(error);
    }
  });
  }
  getEmpresas(){
    this.adminService.obtenerCompanias().subscribe({next:(data: Sygenacs[]) => {
      this.empresas=data;
    },
    error: (error) => {
      alert(error);
    }
  });
  }
  getAccesos(){
    this.adminService.obtenerAccesos().subscribe({next:(data: Sygenopc[]) => {
      //this.files=this.transformToTreeNodes(data);
      //this.files=this.getTreeNodesData();
      this.treeData=this.transformToTreeNodes(data);
      this.treeData.forEach(n => this.setParents(n));
      //this.menu = this.setExpandedProperty(data);
      /*this.nodes = this.transformToTree(data);
      this.nodes = this.nodes.map(node => this.fixTreeStructure(node));*/
      //console.log(JSON.stringify(this.files, null, 2));
    },
    error: (error) => {
      alert(error);
    }
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

  /*transformToTreeNodes(data: any[]): TreeNode[] {
    return data.map(item => ({
      key:item.syMenuCode,
      label: item.syMenuName,
      data: item.syMenuCode,
      icon: 'pi pi-fw pi-inbox',
      children: item.children ? this.transformToTreeNodes(item.children) : [],
      selectable:true
      
    }));
  }*/

  
  // Métodos que se invocan cuando se hace clic en los botones
  onSubmit() {
    console.log('Formulario enviado');
  }

  onExit() {
    console.log('Salir');
  }

  onPrint() {
    console.log('Imprimir');
  }

  onCreateUser() {
    console.log('Crear Usuario');
  }

  onViewProperties() {
    console.log('Ver Propiedades');
  }

  onDeleteUser() {
    console.log('Eliminar Usuario');
  }

  onSaveProperties() {
    console.log('Grabar Propiedades');
  }

  onChangePassword() {
    console.log('Cambiar Clave');
  }

  onCopyProperties() {
    console.log('Copiar Propiedades');
  }

  onViewMac() {
    console.log('Ver Mac');
  }

  // Métodos para manejar cambios en los checkboxes
  onUsuarioChange() {
    console.log('Cambio en los usuarios');
  }

  onEmpresaChange() {
    console.log('Cambio en las empresas');
  }

  onPropertyChange() {
    console.log('Cambio en las propiedades');
  }

  getTreeNodesData() {
    return [
        {
            key: '0',
            label: 'Documents',
            data: 'Documents Folder',
            icon: 'pi pi-fw pi-inbox',
            children: [
                {
                    key: '0-0',
                    label: 'Work',
                    data: 'Work Folder',
                    icon: 'pi pi-fw pi-cog',
                    children: [
                        { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                        { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                    ]
                },
                {
                    key: '0-1',
                    label: 'Home',
                    data: 'Home Folder',
                    icon: 'pi pi-fw pi-home',
                    children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                }
            ]
        },
        {
            key: '1',
            label: 'Events',
            data: 'Events Folder',
            icon: 'pi pi-fw pi-calendar',
            children: [
                { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
            ]
        },
        {
            key: '2',
            label: 'Movies',
            data: 'Movies Folder',
            icon: 'pi pi-fw pi-star-fill',
            children: [
                {
                    key: '2-0',
                    icon: 'pi pi-fw pi-star-fill',
                    label: 'Al Pacino',
                    data: 'Pacino Movies',
                    children: [
                        { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
                        { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
                    ]
                },
                {
                    key: '2-1',
                    label: 'Robert De Niro',
                    icon: 'pi pi-fw pi-star-fill',
                    data: 'De Niro Movies',
                    children: [
                        { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                        { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
                    ]
                }
            ]
        }
    ];
}
}
