import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './auth/auth.guard';

//export const routes: Routes = [];
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent,canActivate:[AuthGuard] }
  ];