import { useSignIn } from '../lib/useSignIn';
import Layout from '../components/Layout';

function loginPage() {
  const { signInGoogle, isPending, error } = useSignIn();
  return (
    <Layout>
      {isPending && 'Loading..'}
      <div className="flex justify-center items-center h-96">
        <button
          className="bg-slate-300 px-6 py-2 rounded-md text-gray-900"
          onClick={signInGoogle}
              >
          <img src='/google.svg' className='inline mr-4'/>
          Login
        </button>
      </div>
      {error && error}
    </Layout>
  );
}

export default loginPage;
