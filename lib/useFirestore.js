import { useState } from 'react';
import { db, timestamp } from '../firebase/config';

export function useFirestore(collection) {
  let ref = db.collection(collection);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const addDoc = async (doc) => {
    setIsPending(true);
    try {
      const createdAt = timestamp.now()
      await ref.add({...doc, createdAt});
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
