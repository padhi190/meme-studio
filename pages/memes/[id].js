import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import { useCollection } from '../../lib/useCollection';
import { UserContext } from '../../lib/usercontext';
import { FaRegTrashAlt, FaPencilAlt, FaDownload, FaPlus } from 'react-icons/fa';
import { useFirestore } from '../../lib/useFirestore';
import Loader from '../../components/Loader';
import formatRelative from 'date-fns/formatRelative';
import Modal from '../../components/Modal';
import MemeGenerator from '../../components/MemeGenerator';
import Meme from '../../components/Meme';

function ViewMemePage() {
  const [showModal, setShowModal] = useState(false);
  const user = useContext(UserContext);
  const router = useRouter();
  const isValid = user && user?.uid === router.query.id;

  const { documents, error } = useCollection(`users/${router.query.id}/memes`);

  const {
    addDoc,
    deleteDoc,
    isPending,
    error: addError,
  } = useFirestore(`users/${user?.uid}/memes`);

  const handleAddMeme = (doc) => {
    addDoc(doc);
    setShowModal(false);
  };

  return (
    <Layout>
      {!isValid ? 'Error' : !documents && <Loader />}
      <div className="flex flex-wrap flex-col md:flex-row gap-3 items-end">
        {!documents?.length && (
          <div className="text-xl">You don&apos;t have any collection</div>
        )}
        {isValid &&
          documents?.map((doc) => (
            <div className="relative shadow-md" key={doc.id}>
              <Meme img_url={doc.img_url} top_text={doc.top_text} bottom_text={doc.bottom_text} /> 
              <div className="flex justify-between items-center px-2 h-12 bg-slate-100 -mt-3">
                <p>{formatRelative(doc.createdAt.toDate(), new Date())}</p>
                <div className="flex justify-between items-center gap-6">
                  <p
                    className="cursor-pointer hover:text-red-600"
                    onClick={() => deleteDoc(doc.id)}
                  >
                    <FaRegTrashAlt />
                  </p>
                  <p className="cursor-pointer hover:text-cyan-500">
                    <FaPencilAlt />
                  </p>
                  <p className="cursor-pointer hover:text-cyan-500">
                    <FaDownload />
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isPending && <Loader />}
      {addError && addError.message}
      <button
        className="fixed bottom-5 right-5 bg-orange-600 hover:bg-orange-500 p-6 text-white rounded-full text-2xl md:mr-12 flex gap-2"
        onClick={() => setShowModal(true)}
      >
        <FaPlus />
        <p className='hidden md:inline'>Add Meme</p>
      </button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <MemeGenerator handleAddMeme={handleAddMeme} /> 
      </Modal>
    </Layout>
  );
}

export default ViewMemePage;
