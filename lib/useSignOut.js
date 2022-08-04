import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { auth } from '../firebase/config';
import { UserContext } from '../lib/usercontext';

export function useSignOut() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(UserContext);
  const router = useRouter();

  const signOut = async () => {
    setIsPending(true);
    try {
      await auth().signOut();
      dispatch({
        type: 'LOGOUT',
      });
      setIsPending(false);
      router.push('/');
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signOut, isPending, error };
}
