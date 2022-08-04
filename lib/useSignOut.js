import { useRouter } from 'next/router';
import { useState } from 'react';
import { auth } from '../firebase/config';

export function useSignOut() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const signOut = async () => {
    setIsPending(true);
    try {
      await auth().signOut();
      setIsPending(false);
      router.push('/');
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signOut, isPending, error };
}
