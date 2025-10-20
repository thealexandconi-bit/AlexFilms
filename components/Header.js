// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-wide">
        AlexFilms
      </Link>
      <nav className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wider">
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
