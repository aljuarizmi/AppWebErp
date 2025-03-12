import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../components/login/confirmdialog.component';
import { ConfigService } from './config.service';


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
  //private apiURL='http://webapprest:8080/api';
  private loginUrl = '';//this.apiURL+'/auth/login';
  private serversUrl = '';//this.apiURL+'/servers';
  private databasesUrl = '';//this.apiURL+'/servers/companies';
  private menuUrl='';//this.apiURL+'/sy/access';
  private menuSearch='';//this.apiURL+'/sy/managment/search';
  private menuSearchers='';//this.apiURL+'/sy/managment/searchers';
  private urlPrueba='';

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar,private dialog: MatDialog,private configService: ConfigService) {
    this.loginUrl=this.configService.getEndpoint('auth','login');
    this.serversUrl=this.configService.getEndpoint('configuration','getServers');
    this.databasesUrl=this.configService.getEndpoint('configuration','getCompanies');
    this.menuUrl=this.configService.getEndpoint('systemAdmin','getMenu');
    this.menuSearch=this.configService.getEndpoint('systemAdmin','getSearch');
    this.menuSearchers=this.configService.getEndpoint('systemAdmin','getSearchers');
  }
  /*getPrueba(){
    return this.configService.getEndpoint('auth','login');
  }*/
  login(credentials: { syUser: string; bizGrpId: number; serverName: string; dataBase: string; syUserPsc: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.loginUrl, credentials);
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.serversUrl).pipe(
      catchError(error => {
        console.error('Error en getServers():', error);
        const errorMsg = error.error?.message || 'No se pudo conectar al API para cargar servidores';
        this.snackBar.open(errorMsg, 'Cerrar', { duration: 3000 });
        return throwError(() => new Error(errorMsg));
      })
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
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  getMenu(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return throwError(() => new Error('No hay token disponible'));
    }
    return this.http.get(this.menuUrl, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap(menu => {
        localStorage.setItem('menu', JSON.stringify(menu));
      }),
      catchError((error) => {
        console.error('Error en getMenu():', error);
        this.snackBar.open('Error al cargar el menú', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar el menú'));
      })
    );
  }
  
  obtenerDatosBuscador<T>(body: any): Observable<T> {
    //console.log(body);
    const token = this.getToken();
    return this.http.post<T>(this.menuSearch, body, { headers: { Authorization: `Bearer ${token}` } });
  }

  obtenerBuscadores<T>(body: any): Observable<T> {
    //console.log(body);
    const token = this.getToken();
    return this.http.post<T>(this.menuSearchers, body, { headers: { Authorization: `Bearer ${token}` } });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}