import { useRouter } from 'next/router';
import { useState } from 'react';
import { auth } from '../firebase/config';

export function useSignIn() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const signInGoogle = async () => {
    setIsPending(true);
    const googleProvider = new auth.GoogleAuthProvider();
    try {
      await auth().setPersistence(auth.Auth.Persistence.SESSION);
      const result = await auth().signInWithPopup(googleProvider);
      setIsPending(false);
      router.push('/memes');
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signInGoogle, isPending, error };
}
