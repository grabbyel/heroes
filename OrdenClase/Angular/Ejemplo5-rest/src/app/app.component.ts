import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemons: any = [];
  nombre: string = '';

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAll().subscribe((datos) => {
      this.pokemons = datos['results'];
      console.log(this.pokemons);
    });
  }
}
