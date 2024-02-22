import * as React from 'react';
import {Alert} from 'react-native';

export interface User {
  email: string;
  password: string;
}

const BASE_URL = 'https://workbench-test.stainly.com';

export const AuthContext = React.createContext<{
  user: User | null;
  onLogin: (user: User) => void;
  doLogout: () => void;
}>({user: null, onLogin: () => {}, doLogout: () => {}});

const AuthContextProvider = ({children}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [accessToken, setAccessToken] = React.useState('');

  const onLogin = (user: User) => {
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);

    fetch(`${BASE_URL}/wbcore/authentication/token/`, {
      method: 'POST',
      body: formData,
    })
      .then(async resp => {
        const data = await resp.json();

        if (!(resp.status >= 200 && resp.status <= 299)) {
          Alert.alert(data.detail);
        } else {
          setUser(user);
          setAccessToken(data.access);
        }
      })
      .catch(err => {
        console.log('[On Login][err]');
        console.log(err);
      });
  };

  const doLogout = () => {
    setUser(null);
    setAccessToken('')
  }

  return (
    <AuthContext.Provider value={{user, onLogin, doLogout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
