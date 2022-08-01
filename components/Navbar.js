import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header className="flex items-center justify-between px-12 py-6 h-12 bg-gray-400">
      <div>
        <Link href="/">Meme Generator</Link>{' '}
      </div>
      <nav>
        <Link href="/memes">Memes</Link>
      </nav>
    </header>
  );
}

export default Navbar;
