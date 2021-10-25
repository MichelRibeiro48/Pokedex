import Button from "../components/Button";
import Index from "../components/Index";
import axios from "axios";
import { useEffect, useState } from "react";
import { colors } from "../styles/colors";

import {
  HomePageContainer,
  HomePageContent,
  HomePageImgContainer,
} from "../styles/homePageStyle";
import {
  IPokemon,
  PokemonDescription,
  PokemonTypesResponse,
} from "../@types/homeTypes";

export default function Home() {
  const [pokemon, setPokemon] = useState<IPokemon>(null);
  const [index, setIndex] = useState(1);

  const getPokemon = async () => {
    const response = await axios.get<PokemonTypesResponse>(
      `https://pokeapi.co/api/v2/pokemon/${index}`
    );
    const responseDescription = await axios.get<PokemonDescription>(
      `https://pokeapi.co/api/v2/pokemon-species/${index}/`
    );
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other["official-artwork"].front_default,
      description: responseDescription.data.flavor_text_entries.filter(
        (description) => description.language.name === "en"
      )[0].flavor_text,
      moves: response.data.moves,
      types: response.data.types,
    });
  };

  useEffect(() => {
    getPokemon();
  }, [index]);

  return (
    <HomePageContainer color={colors[pokemon?.types[0].type.name]}>
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
