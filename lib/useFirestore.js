import { useState } from 'react';
import { db } from '../firebase/config';

export function useFirestore(collection) {
  let ref = db.collection(collection);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const addDoc = async (doc) => {
    setIsPending(true);
    try {
      await ref.add(doc);
      setIsPending(false);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };

  const deleteDoc = async (id) => {
    setIsPending(true);
    try {
      await ref.doc(id).delete();
      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { addDoc, deleteDoc, isPending, error};
}
