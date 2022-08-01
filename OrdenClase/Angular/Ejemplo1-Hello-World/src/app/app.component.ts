import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  texto: string = 'Mi primera web con angular';
  nombre: string = 'Gabriel';
  apellidos: string = 'Galdeano';
  edad: number = 38;

  deshabilitado: boolean = true;

  estilo: string = '';

  constructor() {
    //crear un temporizador que cuando transcurran 3 segundos, se habilite el botón
    setTimeout(() => {
      this.deshabilitado = false;
    }, 3000);
  }

  saludar(): void {
    alert('Hola');
  }
}
