import NavigationIndex from '@navigations/NavigationIndex';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './src/state/store';

const queryClient = new QueryClient();

const theme = extendTheme({
  components: {
    Container: {
      width: {
        maxWidth: '55%',
      },
    },
  },
});

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

import { AuthProvider } from './src/contexts/AuthContext';
import { AxiosProvider } from './src/contexts/AxiosContext';

const App = () => {
  return (
    <NativeBaseProvider theme={theme} config={config}>
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
      <Provider store={store}>
    <AuthProvider>
      <AxiosProvider>
        <NavigationIndex />
        </AxiosProvider>
        </AuthProvider>
        </Provider>
      </SafeAreaProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
