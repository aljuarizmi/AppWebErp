import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }
  handleError(error: any) {
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
