// Dentro da pasta blog vai ser renderizado a page(index)
// Dentro da pasta blog existe uma pasta dinâmica, que vai renderizar o slug(id) especifícado no params, e dentro da pasta [slug] vai ser renderizado a page(index) que tem acesso ao params.
// slug ou id: é um termo utilizado para valores únicos, sem acentos e lower-case
import Link from "next/link";

type PostType = {
  userId: number;
  id: number;
  title: string;
};

async function getData(): Promise<PostType[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function BlogList() {
  const data = await getData();
  return (
    <>
      <h2>Lista de Posts:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
