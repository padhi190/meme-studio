import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../../components/Layout';
import { useCollection } from '../../lib/useCollection';
import { UserContext } from '../../lib/usercontext';

function ViewMemePage() {
  const user = useContext(UserContext);
  const router = useRouter();
  const isValid = user && (user?.uid === router.query.id);

  const { documents, error } = useCollection(`users/${ router.query.id }/memes`);

  return (
    <Layout>
      {!isValid ? 'Error' : !documents && 'Loading...'}
      {isValid && documents?.map(doc => (
        <img src={ doc.img_url } className='h-64' key={doc.id}/>
      ))}
    </Layout>
  );
}

export default ViewMemePage;
