import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainNavigationParamList } from './interface'
import DrawerNavigation from './DrawerNavigator'
import Pages from '../screens/Pages'


const MainStack = createNativeStackNavigator<MainNavigationParamList>()

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='DrawerNavigation'>
            <MainStack.Screen
                name='DrawerNavigation'
                component={DrawerNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name='Pages'
                component={Pages}
                // options={{
                //     headerShown: false,
                // }}
            />
        </MainStack.Navigator>
    )
}

export default MainStackNavigator
