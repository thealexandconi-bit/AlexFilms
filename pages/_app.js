import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col relative">
      <Header />
      <div className="grow">
        <Component {...pageProps} />
      </div>
      <Footer />
      <FloatingButton />
    </main>
  );
}