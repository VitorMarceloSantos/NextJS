// Layout Local: todas as rotas que estão aninhadas dentro da pasta dashboard, utilizaram o layoutDashboard.

// Metadata dinâmico
// import { Metadata } from "next";

// type Props = {
//   params: { rota_dinamica: string };
// };

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product - ${params.rota_dinamica}`,
//   };
// };

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>
        Layout Dashboard: todos os componentes serão exibidos apenas nas rotas
        derivadas de Dashboard.
      </h2>
      {children}
    </>
  );
}
