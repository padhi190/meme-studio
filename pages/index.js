import Layout from '../components/Layout';
import MemeGenerator from '../components/MemeGenerator';

export default function Home() {
  const handleAddMeme = (doc) => {
    console.log('handleAddMemeCalled', doc);
  }
  return (
    <Layout>
      <div>Home</div>
      <MemeGenerator handleAddMeme={handleAddMeme} title='Title' />
    </Layout>
  );
}
