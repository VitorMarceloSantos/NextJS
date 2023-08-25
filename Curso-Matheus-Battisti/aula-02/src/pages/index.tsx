// Outra opção para utilizar metadata é utilizar direto a tag Head.
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Novo Title</title>
        <meta name="description" content="Nova Descrição"></meta>
      </Head>
      <main>
        <div>
          <h1>Título Inicial: Home</h1>
        </div>
      </main>
    </>
  );
}
