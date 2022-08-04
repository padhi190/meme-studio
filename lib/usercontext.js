import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
  useEffect(() => {
    return auth().onAuthStateChanged((user) => {
        console.log('user')
        if (user) {
            setUser(user);
        } else {
            setUser(null)
        }
      });
      
  }, [])
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
