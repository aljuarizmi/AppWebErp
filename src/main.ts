import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { ConfigService } from './app/services/config.service';
//import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

/*
fetch('/assets/config/endpoints.json')
  .then(response => response.json())
  .then(config => {
    ConfigService.config = config; // Guarda la configuración en una variable estática

    bootstrapApplication(AppComponent, {
      providers: [
        provideHttpClient(),
        { provide: ConfigService, useClass: ConfigService }
      ]
    });
  })
  .catch(error => {
    console.error('Error cargando la configuración:', error);
  });
  */