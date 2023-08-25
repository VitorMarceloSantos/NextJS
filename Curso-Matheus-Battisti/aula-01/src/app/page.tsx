import Image from "next/image";
import linguado from '../../public/images/linquado.png'

export default function Home() {
  return (
    <>
      <main>
        <div>
          <h1>Título Inicial: Home</h1>
          {/* Duas formas de importar uma imagem */}
          <Image src="/images/linquado.png" width="300" height="300" alt="linguado"/>
          <Image src={linguado} width="300" height="300" alt="linguado"/>
        </div>
      </main>
    </>
  );
}
