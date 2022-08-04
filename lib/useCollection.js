import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

export function useCollection(collection) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = db.collection(collection);

    return ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (error) => setError(error.message)
    );
  }, [collection]);

  return { documents, error };
}
