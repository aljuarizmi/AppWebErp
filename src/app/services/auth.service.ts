import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';


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
  private apiUrl = 'https://localhost:7113/auth/login';
  private serversUrl = 'https://localhost:7113/api/servers';
  private databasesUrl = 'https://tuapi.com/api/databases';
  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {}
  
  login(credentials: { syUser: string; bizGrpId: number; serverName: string; dataBase: string; syUserPsc: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.serversUrl).pipe(
      catchError(() => {
        this.snackBar.open('No se pudo conectar al API para cargar servidores', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar servidores'));
      })
    );
  }
  
  getDatabases(serverId: number, serverName: string): Observable<Database[]> {
    return this.http.get<Database[]>(`https://localhost:7113/api/servers/${serverId}?server_name=${serverName}`).pipe(
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
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getMenu(): Observable<any> {
    const token = this.getToken();
    console.log('Token enviado:', token); // 🔍 Verifica si el token existe
  
    if (!token) {
      return throwError(() => new Error('No hay token disponible'));
    }
  
    return this.http.get('https://localhost:7113/api/configurations/menu', {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap(menu => {
        console.log('Menú recibido:', menu); // 🔍 Verifica qué devuelve el API
        localStorage.setItem('menu', JSON.stringify(menu));
      }),
      catchError((error) => {
        console.error('Error en getMenu():', error);
        this.snackBar.open('Error al cargar el menú', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar el menú'));
      })
    );
  }
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
