import { ResultsPokedexType } from "@/types/PokedexType";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const limitPokemon = 100

async function getData(): Promise<ResultsPokedexType> {
  const res = await fetch(`${apiUrl}/?limit=${limitPokemon}`);
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res.json();
}

export default async function Home() {
  const { results } = await getData();
  return (
    <>
      <h1>Iniciando Projeto</h1>
      <ul>
        {results.map(({ name, url }, index) => (
          <li key={index}>
            <h2>{name}</h2>
            <p>{url}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
