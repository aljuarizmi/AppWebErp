import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../components/login/confirmdialog.component';


interface Server {
  server_id: number;
  server_name: string;
}

interface Database {
  sy_company: string;
  sy_company_descr: string;
  biz_grp_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7113/api/auth/login';
  private serversUrl = 'https://localhost:7113/api/servers';
  private databasesUrl = 'https://localhost:7113/api/servers/companies';

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar,private dialog: MatDialog) {}
  
  login(credentials: { syUser: string; bizGrpId: number; serverName: string; dataBase: string; syUserPsc: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.serversUrl).pipe(
      catchError(error => {
        console.error('Error en getServers():', error);
        const errorMsg = error.error?.message || 'No se pudo conectar al API para cargar servidores';
        this.snackBar.open(errorMsg, 'Cerrar', { duration: 3000 });
        return throwError(() => new Error(errorMsg));
      })
      /*catchError(error  => {
        const errorMsg = error.error?.message || 'No se pudo conectar al API para cargar servidores';
        this.snackBar.open('No se pudo conectar al API para cargar servidores', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error(errorMsg));
      })*/
    );
  }
  
  getDatabases(serverId: number, serverName: string): Observable<Database[]> {
    const requestBody = {
      bizGrpId: serverId,
      syServer: serverName,
    };
    return this.http.post<Database[]>(this.databasesUrl, requestBody).pipe(
      catchError(() => {
        this.snackBar.open('No se pudo conectar al API para cargar bases de datos', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar bases de datos'));
      })
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    /*if (typeof localStorage !== 'undefined') {
      //return localStorage.getItem('token');
      const token = localStorage.getItem('token');
      console.log('Token obtenido:', token);
    }*/
    return localStorage.getItem('token');
    //return null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });

    /*const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '350px',
      data: { message: '¿Estás seguro de que deseas cerrar sesión?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.snackBar.open('Sesión cerrada', 'Cerrar', { duration: 2000 });
      }
    });*/
  }

  getMenu(): Observable<any> {
    const token = this.getToken();
    //console.log('Token enviado:', token); // 🔍 Verifica si el token existe
  
    if (!token) {
      return throwError(() => new Error('No hay token disponible'));
    }
  
    return this.http.get('https://localhost:7113/api/sy/access', {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap(menu => {
        //console.log('Menú recibido:', menu); // 🔍 Verifica qué devuelve el API
        localStorage.setItem('menu', JSON.stringify(menu));
      }),
      catchError((error) => {
        console.error('Error en getMenu():', error);
        this.snackBar.open('Error al cargar el menú', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar el menú'));
      })
    );
  }
  
  /*Buscar(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return throwError(() => new Error('No hay token disponible'));
    }
    const body = {
      searchFieldId: 'AR-CUSTOMER',
      searchNo: 0,
      searchNumeroRegistros: '10',
      sqlfilter: ''
    };
      return this.http.post<{table:string}>('https://localhost:7113/api/sy/managment/search',body, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      catchError((error) => {
        console.error('Error en getMenu():', error);
        this.snackBar.open('Error al cargar el menú', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar el menú'));
      })
    );
  }*/

  obtenerDatosBuscador<T>(body: any): Observable<T> {
    //console.log(body);
    const token = this.getToken();
    return this.http.post<T>('https://localhost:7113/api/sy/managment/search', body, { headers: { Authorization: `Bearer ${token}` } });
  }

  obtenerBuscadores<T>(body: any): Observable<T> {
    //console.log(body);
    const token = this.getToken();
    return this.http.post<T>('https://localhost:7113/api/sy/managment/searchers', body, { headers: { Authorization: `Bearer ${token}` } });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
