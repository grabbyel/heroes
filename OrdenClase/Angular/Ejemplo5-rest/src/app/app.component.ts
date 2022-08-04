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
  pokemon: any;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAll().subscribe((datos) => {
      this.pokemons = datos['results'];
      // console.log(this.pokemons);
    });
  }

  buscarPokemon() {
    this.pokemonService.buscar(this.nombre).subscribe((item) => {
      console.log(item);
      this.pokemon = item;
    });
  }
}
