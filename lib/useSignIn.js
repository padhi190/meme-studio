import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { auth } from '../firebase/config';
import { UserContext } from '../lib/usercontext';

export function useSignIn() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(UserContext);
  const router = useRouter();

  const signInGoogle = async () => {
    setIsPending(true);
    const googleProvider = new auth.GoogleAuthProvider();
    try {
      const result = await auth().signInWithPopup(googleProvider);
      dispatch({
        type: 'LOGIN',
        payload: result.user,
      });
      setIsPending(false);
      router.push('/memes');
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signInGoogle, isPending, error };
}
