import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { AuthContext } from './AuthContext';

const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: 'http://192.168.144.2:8080/api',
  });

  const publicAxios = axios.create({
    baseURL: 'http://192.168.144.2:8080/api',
  });

  authAxios.interceptors.request.use(
   async config => {
      const getAuth = await AsyncStorage.getItem('auth');
      const auth = JSON.parse(getAuth);

      if (!config.headers.Authorization && auth?.token) {
        config.headers.Authorization = `Bearer ${auth?.token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </Provider>
  );
};

export { AxiosContext, AxiosProvider };

