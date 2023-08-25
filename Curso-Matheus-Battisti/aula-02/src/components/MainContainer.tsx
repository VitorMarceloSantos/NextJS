export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Esse conteúdo vai ser repetido em todas as páginas.</h1>
      {children}
    </>
  );
}
