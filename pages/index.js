import Link from 'next/link';
import Layout from '../components/Layout';
import MemeGenerator from '../components/MemeGenerator';

export default function Home() {
  const handleAddMeme = (doc) => {
    console.log('handleAddMemeCalled', doc);
  };
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-6 mt-6">
        <div>
          <h1 className="text-5xl font-semibold mb-8">Welcome to meme<span className='font-extralight'>studio</span></h1>
          <p className="text-xl leading-loose mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
          <Link href='/login'><a className='text-cyan-500 border-cyan-500 border px-6 py-2 rounded-full mr-4'>Sign up</a></Link>
          <Link href='/login'><a className='text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full'>Create Meme</a></Link>
        </div>
        <div>
          <MemeGenerator handleAddMeme={handleAddMeme} title="Title" />
        </div>
      </div>
    </Layout>
  );
}
