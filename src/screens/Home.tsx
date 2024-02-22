import React, { useContext } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthContext } from '../context/AuthContext';
import { RootDrawerParamList } from '../navigators/DrawerNavigator';

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

// export default Home

const Stack = createNativeStackNavigator()

type HomeNavScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'HomeNav'>

const HomeNavigation: React.FC<{ navigation: HomeNavScreenNavigationProp }> = ({ navigation }) => {
    
    /**
     * Function to return Menu button for the Home screen
     */
    const menuBtn = (
        <TouchableOpacity testID='menu-btn' onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingRight: 8, paddingTop: 2 }}>
                <Icon size={24} name={'menu'} />
            </View>
        </TouchableOpacity>
    )

    /**
     * Function to return the Header Component for the Home Screen
     * @param props NativeStackHeaderProps
     * @returns
     */
    const homeHeader = (props: NativeStackHeaderProps) => (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                <View style={{ position: 'absolute', left: 8 }}>{menuBtn}</View>
                <Text>
                    {props.route.name}
                </Text>
            </View>
        </SafeAreaView>
    )

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    header: (props) => homeHeader(props),
                }}
            />
            {/* <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='Chart' component={Chart} /> */}
        </Stack.Navigator>
    )
}

export default HomeNavigation
