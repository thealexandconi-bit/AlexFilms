import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

import {
  Bebas_Neue,
  Montserrat,
  Abril_Fatface,
} from "next/font/google";

const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const heroFont = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${headingFont.variable} ${bodyFont.variable} ${heroFont.variable} bg-black text-white min-h-screen flex flex-col relative`}
    >
      <Header />

      <div className="grow">
        <Component {...pageProps} />
      </div>

      <Footer />

      <FloatingButton />
    </main>
  );
}