/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import {RootStack} from './src/navigation/RootStack';
import Globals from './src/utils/Globals';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {(insets: any) => {
            Globals.SAFE_AREA_INSET = insets;
            return <RootStack />;
          }}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
