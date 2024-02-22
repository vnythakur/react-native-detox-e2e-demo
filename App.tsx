/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AuthContextProvider from './src/context/AuthContext';
import RootNavigator from './src/navigators/RootNavigator';

// const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AuthContextProvider>
          <RootNavigator />
        </AuthContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
