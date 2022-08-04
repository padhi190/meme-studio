import { auth } from '../firebase/config';

function loginPage() {
  const googleProvider = new auth.GoogleAuthProvider();
  const handleClick = () => {
    auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      loginPage
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default loginPage;
