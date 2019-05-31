import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ListaCondominosComponent } from './condominos/lista-condominos.component';
import { ReservaComponent } from './reservas/reserva.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'novoCondomino',
        component: SignupComponent
    },
    {
        path: 'reservas',
        component: ReservaComponent
    },
    {
        path: 'listaCondomino',
        component: ListaCondominosComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
