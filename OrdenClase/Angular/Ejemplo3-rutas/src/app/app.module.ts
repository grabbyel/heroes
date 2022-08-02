import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';

// Array con las rutas y debe estar fuera de @ngModule
const misRutas: Routes = [
  { path: 'c1', component: Componente1Component },
  { path: 'c2', component: Componente2Component },
  { path: 'c3/:codigo', component: Componente3Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(misRutas)], // Para que reconozca el array de rutas
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
