import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

function Layout({ title = 'Meme Studio', children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
