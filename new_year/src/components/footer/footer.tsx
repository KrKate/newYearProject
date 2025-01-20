import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-customGray text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-lg font-bold">My Recipe Book</div>

        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="text-xl">
            Home
          </Link>
          <Link href="/recipes" className="text-xl">
            Recipes
          </Link>
          <Link href="/about" className="text-xl">
            About
          </Link>
          <Link href="/contact" className="text-xl">
            Contact
          </Link>
        </nav>

        <div className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} My Recipe Book. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
