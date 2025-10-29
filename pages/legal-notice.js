import React from "react";
import Header from "../components/Header";

export default function LegalNotice() {
  return (
    <main className="bg-black text-gray-200 min-h-screen">
      <Header />

      <section className="max-w-3xl mx-auto px-6 py-24 leading-relaxed">
        <h1 className="text-4xl font-bold mb-8 text-white">Legal Notice</h1>

        <p>
          <strong>Website Owner:</strong><br />
          Alexander Kagerer<br />
          Calle Martinez de la Rosa 111<br />
          29010 Málaga, Spain<br />
          Email: <a href="mailto:thealexandconi@gmail.com" className="underline">thealexandconi@gmail.com</a><br />
          Website: <a href="https://alex-films-mu.vercel.app/" className="underline">https://alex-films-mu.vercel.app/</a>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Disclaimer</h2>
        <p>
          The information contained on this website is for general information purposes only. While every effort is made to
          keep the information accurate and up to date, no representations or warranties of any kind are made about the
          completeness, accuracy, reliability, or availability with respect to the website or the information contained on it.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">External Links</h2>
        <p>
          This website may contain links to external websites that are not provided or maintained by or in any way affiliated
          with Alexander Kagerer. Please note that I do not guarantee the accuracy, relevance, timeliness, or completeness
          of any information on these external websites.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Copyright Notice</h2>
        <p>
          All images, videos, and text content on this website are the intellectual property of Alexander Kagerer unless otherwise stated.
          Unauthorized reproduction, distribution, or modification of this content is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Data Protection</h2>
        <p>
          No personal data is collected through this website unless voluntarily provided (for example, through email contact).
          Any data shared will be handled responsibly and in accordance with applicable data protection laws (GDPR).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Contact</h2>
        <p>
          If you have any questions about this Legal Notice or data privacy matters, you can contact me directly via email at{" "}
          <a href="mailto:thealexandconi@gmail.com" className="underline">thealexandconi@gmail.com</a>.
        </p>

        <p className="mt-12 text-gray-500 text-sm">Last updated: October 2025</p>
      </section>
    </main>
  );
}
