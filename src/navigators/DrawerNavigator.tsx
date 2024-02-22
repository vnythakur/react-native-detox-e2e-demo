import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainNavigationParamList } from './interface';
import Home from '../screens/Home';
import CustomDrawerContent from './CustomDrawerContent';


export type RootDrawerParamList = {
  HomeNav: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();
export type MyDrawerNavigationProp = NativeStackNavigationProp<
  MainNavigationParamList,
  'DrawerNavigation'
>;

const DrawerNavigation: React.FC<{navigation: MyDrawerNavigationProp}> = ({navigation: parentNavigation}) => {

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {width: "100%"},
      }}
    >
      <Drawer.Screen
        name="HomeNav"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
