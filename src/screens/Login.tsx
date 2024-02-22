import {View, Text, SafeAreaView, Button, TextInput} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/core';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const {onLogin} = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('admin@admin.com');
  const [password, setPassword] = React.useState('admin');

  const loginUser = () => {
    onLogin({email, password});
  };

  return (
    <SafeAreaView>
      <View>
        <Text testID="login-head">Login</Text>

        <TextInput testID='input-email' placeholder='Enter Email' onChangeText={setEmail} value={email} />
        <TextInput testID='input-password' placeholder="Enter Password" onChangeText={setPassword} value={password} />

        <Button testID="login-btn" title="Login" onPress={loginUser} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
