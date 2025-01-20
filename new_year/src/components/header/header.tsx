import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-customRed">
          My Recipe Book
        </Link>

        <nav className="hidden md:flex space-x-7">
          <Link
            href="/"
            className="text-xl text-customGray hover:text-gray-800 active:text-customRed"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-xl text-customGray hover:text-gray-800 active:text-customRed"
          >
            Recipes
          </Link>
          <Link
            href="/about"
            className="text-xl text-customGray hover:text-gray-800 active:text-customRed"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl text-customGray hover:text-gray-800 active:text-customRed"
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
