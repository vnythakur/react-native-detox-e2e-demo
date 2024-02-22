import { View, Text } from 'react-native'
import React from 'react'

const Pages = (props) => {

  return (
    <View>
      <Text testID='page-name'>You are in {props.route.params.name} screen</Text>
    </View>
  )
}

export default Pages