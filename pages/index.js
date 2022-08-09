import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../components/Layout';
import MemeGenerator from '../components/MemeGenerator';
import { UserContext } from '../lib/usercontext';

export default function Home() {
  const router = useRouter();
  const user = useContext(UserContext);
  const handleAddMeme = (doc) => {
    if (!user) return router.push('/login');
    return router.push(`memes/${user?.uid}`);
  };
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-6 mt-6">
        <div>
          <h1 className="text-5xl font-semibold mb-8">
            Welcome to meme<span className="font-extralight">studio</span>
          </h1>
          <p className="text-xl leading-loose mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          {user ? (
            <Link href={`memes/${user?.uid}`}>
              <a className="text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full text-xl">
                My Collection 
              </a>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <a className="text-xl text-cyan-500 border-cyan-500 border px-6 py-2 rounded-full mr-4 hover:bg-cyan-400 hover:text-white">
                  Sign up
                </a>
              </Link>
              <Link href="/login">
                <a className="text-white text-xl bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full">
                  Create Meme
                </a>
              </Link>
            </>
          )}
        </div>
        <div>
          <MemeGenerator handleAddMeme={handleAddMeme} />
        </div>
      </div>
    </Layout>
  );
}
