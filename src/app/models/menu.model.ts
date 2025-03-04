export interface MenuItem  {
    syMenuCode: string | null;
    syMenuName: string;
    syMenuParent: string | null;
    syMenuLevel: number;
    syOpcActive: string;
    children: MenuItem[] | null;
    syUrl:string;
    expanded?: boolean; // Agregamos la propiedad opcional
}
