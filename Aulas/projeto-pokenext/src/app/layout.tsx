import Footer from "@/components/Footer";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeNext",
  description: "Generated by Pokedex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}