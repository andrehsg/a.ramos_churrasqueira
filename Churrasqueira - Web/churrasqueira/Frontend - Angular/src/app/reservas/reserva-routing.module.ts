import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './reserva.component';

const routes: Routes = [
   
    {
            path: 'reservas',
            component: ReservaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  declarations: []
})
export class ReservaRoutingModule { }
