import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import MainStackNavigator from './MainNavigator';
import AuthStackNavigator from './AuthNavigator';
import {AuthContext} from '../context/AuthContext';

const RootNavigator = () => {
  const {user} = useContext(AuthContext);

  return user ? <MainStackNavigator /> : <AuthStackNavigator />;
};

export default RootNavigator;
