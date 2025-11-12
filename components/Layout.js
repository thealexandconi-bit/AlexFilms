// components/Layout.js
import Head from "next/head";
import FloatingButton from "./FloatingButton";

export const metadata = {
  title: "AlexFilms",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>AlexFilms</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        {children}
        <FloatingButton />
      </div>
    </>
  );
}