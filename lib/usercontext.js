import { createContext, useReducer } from 'react';

const UserContext = createContext();

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, user: null };
    case 'LOGIN':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider, authReducer };
