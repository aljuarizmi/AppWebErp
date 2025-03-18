import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { catchError, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Compfile } from '../models/systemadmin.model';

@Injectable({
  providedIn: 'root'
})
export class SystemadminService {

  constructor(private errorHandler: ErrorHandlerService,private configService: ConfigService,private authService: AuthService,private http: HttpClient) { }
  obtenerDatosCompania(id: string): Observable<Compfile> {
      const token = this.authService.getToken();
      let apiURL:string=this.configService.getEndpoint('systemAdmin','getCompanies');
      return this.http.get<Compfile>(`${apiURL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .pipe(
        catchError(this.errorHandler.handleError) // Manejo de errores mejorado
      );
    }
}
