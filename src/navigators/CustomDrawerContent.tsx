import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import MenuItem from './MenuItem'
// import DoubleMenuItem from './DoubleMenuItem'

// import MenuHeaderProps from '../components/MenuHeader'

import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const {doLogout} = React.useContext(AuthContext);

  const navigateToHome = () => {
    props.navigation.navigate('Home');
  };

  const pages = Array.from(Array(20).keys());

  const menuItem = React.useCallback((title: string, onClick: () => void) => {
    return (
      <TouchableOpacity
        testID={`${title.toLowerCase().replace(/\s/g, '-')}-menu-id`}
        onPress={onClick}
        key={title}>
        <View style={{padding: 16}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{title}</Text>
            {/* <Text>{`${title.toLowerCase().replace(/\s/g, '-')}-menu-id`}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView edges={['top', 'bottom', 'left']} style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text testID="menu-head">Workbench Demo</Text>
        <TouchableOpacity
          testID="close-menu-btn"
          onPress={() => props.navigation.closeDrawer()}>
          <View style={{paddingRight: 8, paddingTop: 2}}>
            <Icon size={24} name={'close'} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView testID="menu-scrollview">
        {menuItem('Home', navigateToHome)}
        {menuItem('Settings', () => {
          props.navigation.closeDrawer();
          props.navigation.navigate('Pages', {name: 'Settings'});
        })}
        {pages.map(e =>
          menuItem(`Screen ${e + 1}`, () => {
            props.navigation.closeDrawer();
            props.navigation.navigate('Pages', {name: `Screen ${e + 1}`});
          }),
        )}
        {menuItem('Logout', () => {
          props.navigation.closeDrawer();
          doLogout();
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
