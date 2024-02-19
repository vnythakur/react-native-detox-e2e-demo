import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthNavigationParamList } from './interface'
import Login from '../screens/Login'


const AuthStack = createNativeStackNavigator<AuthNavigationParamList>()

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator
