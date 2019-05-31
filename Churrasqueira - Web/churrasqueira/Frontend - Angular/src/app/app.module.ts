import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CondominoService } from './condominos/condomino.service';
import { ListaCondominosComponent } from './condominos/lista-condominos.component';
import { ListaCondominoItemComponent } from './condominos/lista-condomino-item.component';
import { ReservaComponent } from './reservas/reserva.component';
import { ReservaEditComponent } from './reservas/reserva-edit/reserva-edit.component';
import { ReservaListComponent } from './reservas/reserva-list/reserva-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ListaCondominosComponent,
    ListaCondominoItemComponent,
    ReservaComponent,
    ReservaEditComponent,
    ReservaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [CondominoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
