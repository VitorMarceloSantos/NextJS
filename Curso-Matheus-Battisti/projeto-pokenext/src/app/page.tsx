import { ResultsPokedexType } from "@/types/PokedexType";
import Image from "next/image";
import style from '../styles/Home.module.css'
import Card from "@/components/Card";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const limitPokemon = 100;

async function getData(): Promise<ResultsPokedexType> {
  const res = await fetch(`${apiUrl}/?limit=${limitPokemon}`);

  return res.json();
}

export default async function Home() {
  const { results } = await getData();
  return (
    <>
      <div className={style.title_container}>
        <h1 className={style.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div>
      <ul className={style.pokemon_container}>
        {results.map((pokemon, index) => (
          <li key={index} className="li_card">
            <Card pokemonCard={{pokemon, index}}/>
          </li>
        ))}
      </ul>
      </div>
      
    </>
  );
}
