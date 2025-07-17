import { Routes } from '@angular/router';
import { AfegirImatge } from './pages/afegir-imatge/afegir-imatge';
import { Info } from './pages/info/info';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: 'afegir', component: AfegirImatge }, //Ruta bàsica
    { path: 'info', component: Info },
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Redirecció per la ruta buida
    { path: '**', redirectTo: 'home' } //Per rutes desconegudes (not found)
];

