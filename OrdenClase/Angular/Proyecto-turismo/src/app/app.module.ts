import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MuseosComponent } from './components/museos/museos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { MuseoDetalleComponent } from './components/museo-detalle/museo-detalle.component';
import { MuseosDataService } from './services/museos-data.service';

const misRutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'museos', component: MuseosComponent },
  { path: 'museo_detalle/:codigo', component: MuseoDetalleComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //Esta es la forma de decirle que vaya a home por defecto
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    MuseosComponent,
    RutasComponent,
    ContactoComponent,
    ErrorComponent,
    MuseoDetalleComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(misRutas)], //Forma de decirle que
  providers: [MuseosDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
