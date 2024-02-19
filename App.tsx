/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthContextProvider from './src/context/AuthContext';
import RootNavigator from './src/navigators/RootNavigator';

// const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
