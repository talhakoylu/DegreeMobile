import CustomContainer from '@components/CustomContainer';
import SvgHeader from '@components/partials/SvgHeader';
import { Container, extendTheme, NativeBaseProvider, Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const theme = extendTheme({

});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <SvgHeader />
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default App;