//import { TreeModule } from '@circlon/angular-tree-component';

export const TreeStandaloneModule ={ 
  standalone: true,
  imports: [],
  providers: []
}

export interface TreeNode {
  key: string;
  label: string;
  data?: string;
  icon?: string;
  checked?: boolean;
  expanded?: boolean;
  children?: TreeNode[];
  parent?: TreeNode|null;
}
