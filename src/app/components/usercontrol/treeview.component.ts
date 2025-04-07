import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeNode } from '../../models/treestandalone.module';

@Component({
  selector: 'app-treeview',
  standalone: true,
  imports: [FormsModule,CommonModule,TreeviewComponent],
  templateUrl: './treeview.component.html',
  styleUrl: './treeview.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeviewComponent {
  @Input() nodes: TreeNode[] = [];

  toggleExpand(node: TreeNode) {
    node['expanded'] = !node['expanded'];
  }

  /*toggleCheckbox(node: TreeNode) {
    this.checkChildren(node, node.checked!);
    this.updateParentStatus();
  }*/
    toggleCheckbox(node: TreeNode) {
      if (node.children) {
        this.checkChildren(node, node.checked!);
      }
      this.updateParentStatus(node);
    }

  checkChildren(node: TreeNode, checked: boolean) {
    if (node.children) {
      node.children.forEach(child => {
        child.checked = checked;
        this.checkChildren(child, checked);
      });
    }
  }

  updateParentStatus(node: TreeNode | undefined) {
    while (node?.parent) {
      const parent = node.parent;
      const children = parent.children || [];
  
      const allChecked = children.every(child => child.checked);
      const someChecked = children.some(child => child.checked);
  
      parent.checked = allChecked ? true : someChecked ? undefined : false;
  
      node = parent; // seguimos subiendo
    }
  }
  /*updateParentStatus() {
    function updateParent(node: TreeNode) {
      if (!node.children) return;
      const allChecked = node.children.every(child => child.checked);
      const someChecked = node.children.some(child => child.checked);
      node.checked = allChecked ? true : someChecked ? undefined : false;
    }
    this.nodes.forEach(updateParent);
  }*/
}
