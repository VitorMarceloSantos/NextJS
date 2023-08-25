type PokedexType = {
  name: string;
  url: string;
};

export type ResultsPokedexType = {
  results: PokedexType[];
};

export type CardPokemon = {
  pokemonCard: {
    pokemon: PokedexType;
    index: number;
  };
};
