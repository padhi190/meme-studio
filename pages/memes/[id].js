import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../../components/Layout';
import { useCollection } from '../../lib/useCollection';
import { UserContext } from '../../lib/usercontext';
import { FaRegTrashAlt, FaPencilAlt, FaDownload } from "react-icons/fa";

function ViewMemePage() {
  const user = useContext(UserContext);
  const router = useRouter();
  const isValid = user && user?.uid === router.query.id;

  const { documents, error } = useCollection(`users/${router.query.id}/memes`);

  return (
    <Layout>
      {!isValid ? 'Error' : !documents && 'Loading...'}
      <div className="flex flex-col md:flex-row gap-3 items-center">
        {isValid &&
          documents?.map((doc) => (
            <div className="relative shadow-md" key={doc.id}>
              <Image src={doc.img_url} width={405} height={256} className='shadow-md'/>
              <p className="absolute top-3 left-0 right-0 text-white text-4xl text-center mx-auto uppercase">
                {doc.top_text}
              </p>
              <p className="absolute bottom-16 left-0 right-0 text-white text-4xl text-center mx-auto uppercase">
                {doc.bottom_text}
              </p>
              <div className='flex justify-between items-center px-2 h-12 bg-slate-100 -mt-3'>
                <p>Wednesday, 4 Aug 2022</p>
                <div className='flex justify-between items-center gap-6'>
                  <p className='cursor-pointer hover:text-red-600'><FaRegTrashAlt /></p>
                  <p className='cursor-pointer hover:text-cyan-500'><FaPencilAlt /></p>
                  <p className='cursor-pointer hover:text-cyan-500'><FaDownload /></p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default ViewMemePage;
