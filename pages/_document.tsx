// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Tailwind CSS from CDN (still works visually) */}
        <script async src="https://cdn.tailwindcss.com"></script>

        {/* ✅ Safe inline Tailwind config (moved into next/script for async execution) */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      heading: ['Bebas Neue', 'sans-serif'],
                      body: ['Montserrat', 'sans-serif'],
                      hero: ['Abril Fatface', 'serif'],
                    },
                  },
                },
              };
            `,
          }}
        />
      </Head>
      <body className="bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}