import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable,catchError,of,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../components/login/confirmdialog.component';
import { ConfigService } from './config.service';
import { isPlatformBrowser } from '@angular/common';
import { ErrorHandlerService } from './error-handler.service';


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

  constructor(private http: HttpClient, 
              private router: Router, 
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private configService: ConfigService,
              @Inject(PLATFORM_ID) private platformId: object,
              private errorHandler: ErrorHandlerService) {
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
  login(credentials: { syUser: string; bizGrpId: number; serverName: string; dataBase: string; syUserPsc: string }): Observable<{ token: string,expirationTime:number }> {
    //console.log("login: "+this.loginUrl);
    return this.http.post<{ token: string,expirationTime:number }>(this.loginUrl, credentials);
  }

  getServers(): Observable<Server[]> {
    //console.log("serversUrl:"+this.configService.getEndpoint('configuration','getServers'));
    return this.http.get<Server[]>(this.configService.getEndpoint('configuration','getServers')).pipe(
      catchError(error => {
        console.error('Error en getServers():', error);
        const errorMsg = error.error?.message || 'No se pudo conectar al API para cargar servidores: '+this.serversUrl+'.';
        this.snackBar.open(errorMsg, 'Cerrar', { duration: 3000 });
        return throwError(() => new Error(errorMsg));

      /*
        if (err instanceof HttpErrorResponse) {
          console.error("Error HTTP:", err.status, err.message);
        } else if (err instanceof TypeError) {
          console.error("Error de red: No se pudo conectar a la API.");
        } else if (err.name === "TimeoutError") {
          console.error("Error: La petición tardó demasiado en responder.");
        } else if (err instanceof SyntaxError) {
          console.error("Error en el formato JSON.");
        } else {
          console.error("Error desconocido:", err);
        }
        return throwError(() => err);
      */

      })
    );
  }
  
  getDatabases(serverId: number, serverName: string): Observable<Database[]> {
    const requestBody = {
      bizGrpId: serverId,
      syServer: serverName,
    };
    //console.log("this.databasesUrl: "+this.databasesUrl+", requestBody: "+requestBody);
    return this.http.post<Database[]>(this.databasesUrl, requestBody).pipe(
      catchError(() => {
        this.snackBar.open('No se pudo conectar al API para cargar bases de datos', 'Cerrar', { duration: 3000 });
        return throwError(() => new Error('Error al cargar bases de datos'));
      })
    );
  }

  saveToken(token: string,expirationTime: number): void {
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString());
  }

  getToken(): string {
    /*if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token')||'';
    }*/
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token') || '';
      const expiration = localStorage.getItem('tokenExpiration')||'';
      //console.log("token: "+token+"- expiration: "+expiration);
      if (token && expiration) {
        const now = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos
        //console.log("now: "+now+" => "+parseInt(expiration, 10));
        if (parseInt(expiration, 10) > now) {
          return token; // Token válido
        } else {
          this.clearToken(); // Token expirado, eliminarlo
          return '';
        }
      }
    }
    return '';
  }

  clearToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
    //this.router.navigate(['/login']); // Redirigir al login
  }

  logout(): void {
    //localStorage.removeItem('token');
    this.clearToken();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('tokenExpiration');
    if (!token || !expiration) {
      return false;
    }
    const now = Math.floor(Date.now() / 1000); // Obtener tiempo actual en segundos
    return now < +expiration; // Comparar con la fecha de expiración
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
    const token = this.getToken();
    return this.http.post<T>(this.menuSearch, body, { headers: { Authorization: `Bearer ${token}` } });
  }

  obtenerBuscadores<T>(body: any): Observable<T> {
    const token = this.getToken();
    return this.http.post<T>(this.menuSearchers, body, { headers: { Authorization: `Bearer ${token}` } });
  }
  obtenerDatosCodigo<T>(body: any): Observable<T> {
    const token = this.getToken();
    return this.http.post<T>(this.configService.getEndpoint('systemAdmin','getSearchCodigo'), body, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }

  private handleError(error: any) {
    let errorMessage = 'Ocurrió un error desconocido.';
    if (error instanceof HttpErrorResponse) {
      // Error HTTP (respuesta del servidor con status >= 400)
      if (error.error && error.error.details) {
        errorMessage = error.error.details; // Extrae el "details" si está presente
      } else {
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    } else if (error instanceof TypeError) {
      // Error de conexión o de red
      errorMessage = "Error de red: No se pudo conectar a la API.";
    } else if (error.name === "TimeoutError") {
      // Timeout en la petición
      errorMessage = "Error: La petición tardó demasiado en responder.";
    } else if (error instanceof SyntaxError) {
      // Error de JSON mal formado
      errorMessage = "Error en la respuesta del servidor.";
    } else {
      // Otros errores desconocidos
      errorMessage = "Error desconocido.";
    }
    return throwError(() => new Error(errorMessage));
    //return of(null);
  }
}