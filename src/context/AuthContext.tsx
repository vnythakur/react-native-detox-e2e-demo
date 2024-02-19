import * as React from 'react';

export interface User {
  email: string;
  password: string;
}

export const AuthContext = React.createContext<{
  user: User | null;
  onLogin: (user: User) => void;
}>({user: null, onLogin: () => {}});

const AuthContextProvider = ({children}) => {
  const [user, setUser] = React.useState<User | null>(null);

  const onLogin = (user: User) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{user, onLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
