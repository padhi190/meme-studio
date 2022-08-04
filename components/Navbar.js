import Link from 'next/link';
import { useContext, useState } from 'react';
import { UserContext } from '../lib/usercontext';
import { useSignOut } from '../lib/useSignOut';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };
  const closeMenu = () => setIsMenuOpen(false);
  const user = useContext(UserContext);
  const { signOut, isPending, error } = useSignOut();

  return (
    <header className="">
      <div className="pt-2 h-12 flex items-center justify-between max-w-7xl mx-auto px-12">
        <div className="flex items-center py-2 space-x-5">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.svg" className="h-9 cursor-pointer" />
          </Link>
          {/* Left top menu */}
          <div className="md:flex hidden space-x-4 pt-1 text-sm">
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
        <nav className="hidden md:flex items-center pt-1 gap-5">
          {!user ? (
            <>
              <Link href="/login">
                <a className="font-semibold bg-cyan-500 hover:bg-cyan-400 text-gray-50 px-6 py-2 rounded-full">
                  Login
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link href={`/memes/${user?.uid}`}>
                <a className="font-semibold">Memes</a>
              </Link>
              <img
                className="h-8 rounded-full inline"
                src={user.photoURL}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = '/profile_pic.svg';
                }}
              />
              <a
                onClick={signOut}
                className="font-semibold bg-cyan-500 hover:bg-cyan-400 text-gray-50 px-6 py-2 rounded-full cursor-pointer"
              >
                <p>Sign out</p>
                {isPending && 'Logging out..'}
              </a>
            </>
          )}
        </nav>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button
            onClick={handleMenu}
            className={`z-40 md:hidden focus:outline-none block hamburger ${
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
           bg-cyan-900 z-30`}
        >
          <Link href="/feature">
            <a className="hover:text-cyan-500" onClick={closeMenu}>
              Feature
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-cyan-500" onClick={closeMenu}>
              Documentation
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-cyan-500" onClick={closeMenu}>
              Pricing
            </a>
          </Link>
          {!user ? (
            <>
              <Link href="/login">
                <a className="hover:text-cyan-500" onClick={closeMenu}>
                  Login
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link href={`/memes/${user?.uid}`}>
                <a className="hover:text-cyan-500" onClick={closeMenu}>
                  Memes
                </a>
              </Link>
              <Link href="/">
                <a
                  className="hover:text-cyan-500"
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                >
                  Sign out
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
