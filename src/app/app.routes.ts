import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './auth/auth.guard';
import { M00S01N01Component } from './components/modules/SY/M00S01N01.component';

//export const routes: Routes = [];
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent,canActivate:[AuthGuard],children:[
        {path:'M00S01N01',component:M00S01N01Component}
    ] }
  ];