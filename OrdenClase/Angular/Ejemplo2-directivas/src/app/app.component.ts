import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  alumnos: any[] = [
    {
      valoracion: 'alta',
      repetidor: true,
      nombre: 'Gabriel',
      apellido: 'Galdeano',
      nota: 9.8,
    },
    {
      valoracion: 'media',
      repetidor: false,
      nombre: 'Antonio',
      apellido: 'Martinez',
      nota: 7.5,
    },
    {
      valoracion: 'baja',
      repetidor: true,
      nombre: 'Andrea',
      apellido: 'De la Vega',
      nota: 6.9,
    },
    {
      valoracion: 'media',
      repetidor: false,
      nombre: 'Maria',
      apellido: 'Martinez',
      nota: 4.2,
    },
    {
      valoracion: 'baja',
      repetidor: true,
      nombre: 'pepillo',
      apellido: 'pilates',
      nota: 3.8,
    },
    {
      valoracion: 'alta',
      repetidor: true,
      nombre: 'Juan Carlos',
      apellido: 'Aragon',
      nota: 9.9,
    },
    {
      valoracion: 'media',
      repetidor: false,
      nombre: 'Antonio',
      apellido: 'Martin',
      nota: 2.5,
    },
    {
      valoracion: 'media',
      repetidor: true,
      nombre: 'Aron',
      apellido: 'Fernandez',
      nota: 7.9,
    },
    {
      valoracion: 'alta',
      repetidor: false,
      nombre: 'Oriol',
      apellido: 'Martinez',
      nota: 1.2,
    },
  ];
}
