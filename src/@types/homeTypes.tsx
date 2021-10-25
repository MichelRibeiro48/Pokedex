export interface PokemonTypesResponse {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  moves: PokemonNameMoves[];
  types: PokemonTypeTypes[];
}

export interface IPokemon {
  name: string;
  description: string;
  image: string;
  moves: PokemonNameMoves[];
  types: PokemonTypeTypes[];
}

export interface PokemonDescription {
  flavor_text_entries: PokemonDescriptionText[];
}

export interface PokemonDescriptionText {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface PokemonNameMoves {
  move: {
    name: string;
  };
}

export interface PokemonTypeTypes {
  type: {
    name: string;
  };
}
