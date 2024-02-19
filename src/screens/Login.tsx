import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/core';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const {onLogin} = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('vinay@capitalnumbers.com');
  const [password, setPassword] = React.useState('123456');

  const loginUser = () => {
    onLogin({email, password});
  };

  return (
    <SafeAreaView>
      <View>
        <Text testID='login-head'>Login</Text>

        <Button testID='login-btn' title="Login" onPress={loginUser} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
