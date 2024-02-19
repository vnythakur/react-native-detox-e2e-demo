import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainNavigationParamList } from './interface'
import Home from '../screens/Home'


const MainStack = createNativeStackNavigator<MainNavigationParamList>()

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='Home'>
            <MainStack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </MainStack.Navigator>
    )
}

export default MainStackNavigator
