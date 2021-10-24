import Button from "../components/Button";
import Index from "../components/Index";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  HomePageContainer,
  HomePageContent,
  HomePageImgContainer,
} from "../styles/homePageStyle";

interface PokemonTypeResponse {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  species: {
    url: string;
  };
  types: PokemonTypeTypes[];
  moves: PokemonMoves[];
}

interface PokemonMoves {
  move: {
    name: string;
  };
}

interface PokemonTypeTypes {
  type: {
    name: string;
  };
}

interface PokemonType {
  name: string;
  image: string;
  description: string;
  types: PokemonTypeTypes[];
  moves: PokemonMoves[];
}
interface PokemonDesc {
  flavor_text_entries: LanguageType[];
}

interface LanguageType {
  flavor_text: string;
  language: {
    name: string;
  };
}

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonType>(null);
  const [index, setIndex] = useState(1);

  const getPokemon = async () => {
    const pokemonResponse = await axios.get<PokemonTypeResponse>(
      `https://pokeapi.co/api/v2/pokemon/${index}`
    );
    const pokemonDescriptionResponse = await axios.get<PokemonDesc>(
      pokemonResponse.data.species.url
    );
    setPokemon({
      name: pokemonResponse.data.name,
      image:
        pokemonResponse.data.sprites.other["official-artwork"].front_default,
      description: pokemonDescriptionResponse.data.flavor_text_entries.filter(
        (language) => language.language.name === "en"
      )[0].flavor_text,
      types: pokemonResponse.data.types,
      moves: pokemonResponse.data.moves,
    });
  };

  useEffect(() => {
    getPokemon();
  }, [index]);

  return (
    <HomePageContainer color="green">
      <HomePageContent>
        <div className="title">
          <h1 className="pokemon">{pokemon?.name}</h1>
          <h3 className="types">
            {pokemon?.types.map((type) => type.type.name).join()}
          </h3>
        </div>
        <HomePageImgContainer>
          <img src={pokemon?.image} alt={pokemon?.name} />
        </HomePageImgContainer>
        <p className="description">Description</p>
        <p>{pokemon?.description}</p>
        <div className="line"></div>
        <p className="description">Moves</p>
        <ul className="attacks">
          {pokemon?.moves.map((move, index) => {
            if (index < 4) {
              return <li>{move.move.name}</li>;
            }
          })}
        </ul>
        <div className="buttons">
          <Button onClick={() => setIndex(index - 1)} disabled={index < 2}>
            Back
          </Button>
          <Index>{`${index}`.padStart(3, "0")}</Index>
          <Button onClick={() => setIndex(index + 1)}>Next</Button>
        </div>
      </HomePageContent>
    </HomePageContainer>
  );
}
