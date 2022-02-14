import CustomContainer from '@components/CustomContainer';
import StandardLayout from '@views/layouts/StandardLayout';
import HomeScreen from '@views/screens/HomeScreen';
import { Container, extendTheme, NativeBaseProvider, Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const theme = extendTheme({
  components: {
    Container: {
      width: {
        maxWidth: "55%"
      }
    }
  }
});



const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default App;