// pages/_app.js
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { I18nProvider } from "@/i18n/I18nProvider";

export default function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <main className="bg-black text-white min-h-screen flex flex-col relative">
        <Header />
        <div className="grow">
          <Component {...pageProps} />
        </div>
        <Footer />
        <FloatingButton />
      </main>
    </I18nProvider>
  );
}