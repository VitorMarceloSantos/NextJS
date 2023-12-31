import { Footer } from "@/components/footer/Footer";
// Layout Raiz, se aplica a todas as rotas
// Todos os componentes adicionados no layout raiz será exibidos em todas as páginas, o children será o conteúdo que vai alterar.

// Arquivo metadata na pagina layout(root) vai ser exportado para todas as páginas
// Metadata generico
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
  // icons: {
  //   icon: '/favic.ico',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
