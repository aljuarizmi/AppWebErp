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
  menuAccesos!:Sygenopc[];

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
  getEmpresasUsuario(syUser:string){
    //this.adminService.obtenerUsuarioCompanias(usuario)
    this.adminService.obtenerUsuarioCompanias(syUser).subscribe({next:(data: Sygenacs[]) => {
      this.empresas.forEach(itemA => {
        const coincide = data.some(itemB => itemB.syCompany === itemA.syCompany);
        itemA.selected = coincide;
      });
    },
    error: (error) => {
      alert(error);
    }
  });
  }
  getAccesos(){
    this.adminService.obtenerAccesos().subscribe({next:(data: Sygenopc[]) => {
      this.menuAccesos=data;
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

  getAccesosUsuario(syUser:string){
    this.adminService.obtenerUsuarioAccesos(syUser).subscribe({next:(data: Sygenacs[]) => {
      this.compareAndSelectMenus(this.menuAccesos,data);
      this.treeData=this.transformToTreeNodes(this.menuAccesos);
      this.treeData.forEach(n => this.setParents(n));
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
      selectable:true,
      checked:item.selected
    }));
  }
  
  setParents(node: TreeNode, parent: TreeNode | null = null) {
    node.parent = parent;
    if (node.children) {
      node.children.forEach(child => this.setParents(child, node));
    }
  }

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
    //console.log('Ver Propiedades');
    //Obtenemos la lista de empresas a las que tiene acceso el usuario seleccionado
    //Primero verificamos si hay marcado un usuario
    //Consultamos la data
    let usuario:string='';
    const seleccionados = this.usuarios.filter(u => u.selected);
    if (seleccionados.length === 1) {
      //console.log("Hay uno solo seleccionado. ID:", seleccionados[0].syUser);
      usuario=seleccionados[0].syUser;
      this.getEmpresasUsuario(usuario);
      this.getAccesosUsuario(usuario);

    } else if (seleccionados.length > 1) {
      //console.log("Hay varios seleccionados.");
      alert("Solo debe seleccionar solo un usuario.");
    } else {
      //console.log("No hay ninguno seleccionado.");
      alert("Debe de seleccionar un usuario.");
    }
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

// Función recursiva para comparar los menús en el primer JSON con los del segundo
compareAndSelectMenus(menuTree: any[], userMenus: any[]): void {
  menuTree.forEach(menu => {
    // Verificar si el menú debe ser marcado como seleccionado
    menu.selected = this.isMenuSelected(menu.syMenuCode, userMenus);
    
    // Si el menú tiene hijos, realizar la comparación recursiva
    if (menu.children && menu.children.length > 0) {
      this.compareAndSelectMenus(menu.children, userMenus);
    }
  });
}

// Función para verificar si un menú está presente en el segundo JSON basándose solo en syMenuCode
isMenuSelected(menuCode: string, userMenus: any[]): boolean {
  return userMenus.some(menu => menu.syMenuCode === menuCode);
}
}
