import { CardPokemon } from "@/types/PokedexType";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default async function Card({
  pokemonCard: { pokemon, index },
}: CardPokemon) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#00{index + 1}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${index + 1}`} className={styles.btn}>Detalhes</Link>
    </div>
  );
}
