import Image from "next/image";
import styles from "../../../styles/Pokemon.module.css";
import Link from "next/link";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

async function getData(id: string) {
  const res = await fetch(`${apiUrl}/${id}`);

  return res.json();
}
export default async function PokemonDetails({
  params,
}: {
  params: { slug: string };
}) {
  const pokemon = await getData(params.slug);
  return (
    <>
      <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          params.slug
        }.png`}
          width="200"
          height="200"
          alt={pokemon.name}
        />
        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {pokemon.types.map((item: any, index: number) => (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
        <Link href='/'>Voltar</Link>
      </div>
    </>
  );
}
