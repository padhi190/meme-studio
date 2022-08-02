import Head from 'next/head';
import Navbar from './Navbar';

function Layout({ title = 'Meme Studio', children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className='px-12 p-6 max-w-7xl mx-auto'>{children}</div>
    </div>
  );
}

export default Layout;
