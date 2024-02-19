import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View>
        <Text testID='welcome-user'>Welcome {user?.email}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home