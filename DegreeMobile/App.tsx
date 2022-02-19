import NavigationIndex from '@navigations/NavigationIndex';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@views/screens/HomeScreen';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const theme = extendTheme({
  components: {
    Container: {
      width: {
        maxWidth: "55%"
      }
    }
  }
});

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};


const App = () => {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <SafeAreaProvider>
        <NavigationIndex />
      </SafeAreaProvider>
    </NativeBaseProvider>
  )
}

export default App;