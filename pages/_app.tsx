import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Blog/Footer";
import Navbar from "../components/Blog/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <NextNProgress color="#53BD95" />
      {router.pathname === "/" ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <div className="container mx-auto font-sans">
          <Navbar />
          <main className="pb-32">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default MyApp;
