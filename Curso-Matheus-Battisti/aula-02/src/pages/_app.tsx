// import '@/styles/globals.css'
import MainContainer from "@/components/MainContainer";
import type { AppProps } from "next/app";
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  );
}
