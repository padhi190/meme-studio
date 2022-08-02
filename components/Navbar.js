import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <header className="">
      <div className="pt-2 h-12 flex items-center justify-between max-w-7xl mx-auto px-12">
        <div className="flex items-center py-2 space-x-8">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.svg" className="h-9 cursor-pointer" />
          </Link>
          {/* Left top menu */}
          <div className="lg:flex hidden space-x-5 pt-1">
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-600">Feature</a>
            </Link>
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-600">Documentation</a>
            </Link>
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-600">Pricing</a>
            </Link>
          </div>
        </div>

        {/* Top right menu */}
        <nav className="hidden lg:flex items-center pt-1 gap-5">
          <Link href="/memes">
            <a className="font-semibold">Memes</a>
          </Link>
          <Link href="/memes">
            <a className="font-semibold">Login</a>
          </Link>
          <Link href="/memes">
            <a className="font-semibold bg-cyan-500 hover:bg-cyan-400 text-gray-50 px-6 py-2 rounded-full">
              Sign Up
            </a>
          </Link>
        </nav>

        {/* Hamburger button */}
        <div className="lg:hidden">
          <button
            onClick={handleMenu}
            className={`z-40 lg:hidden focus:outline-none block hamburger ${
              isMenuOpen ? 'open' : ''
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
            } absolute flex-col space-y-8 w-full min-h-screen top-0 left-0 bottom-0 pt-36 pl-12 text-lg text-gray-50 uppercase
           bg-cyan-900`}
        >
          <Link href="/">
            <a className="hover:text-cyan-500">Feature</a>
          </Link>
          <Link href="/">
            <a className="hover:text-cyan-500">Documentation</a>
          </Link>
          <Link href="/">
            <a className="hover:text-cyan-500">Pricing</a>
          </Link>
          <Link href="/">
            <a className="hover:text-cyan-500">Login</a>
          </Link>
          <Link href="/">
            <a className="hover:text-cyan-500">Sign up</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;