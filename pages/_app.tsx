"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "../context/I18nContext"; // ⬅️ import the provider (use relative path)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider> {/* ⬅️ wrap everything here */}
      <main className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </I18nProvider>
  );
}
