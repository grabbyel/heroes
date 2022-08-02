import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css'],
})
export class Componente3Component implements OnInit {
  hotel: string = '';
  entrada: string = '';
  salida: string = '';
  personas: number = 0;

  constructor(private ruta: ActivatedRoute) {
    // Recuperar el parámetro de la ruta
    console.log(this.ruta.snapshot.params['codigo']);
    this.hotel = this.ruta.snapshot.params['codigo'];

    //Recuperar los queryParams
    this.entrada = this.ruta.snapshot.queryParams['entrada'];
    this.salida = this.ruta.snapshot.queryParams['salida'];
    this.personas = this.ruta.snapshot.queryParams['personas'];
  }

  ngOnInit(): void {}
}
