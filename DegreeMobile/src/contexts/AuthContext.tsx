import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useState } from 'react';

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    authenticated: false,
  });

  const logout = async () => {
    await AsyncStorage.removeItem('auth');
    setAuthState({
      token: null,
      user: null,
      authenticated: false,
    });
  };

  const getUser = () => {
    return authState.user;
  };

  const getAccessToken = () => {
    return authState.token;
  };

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        getUser,
        setAuthState,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };

