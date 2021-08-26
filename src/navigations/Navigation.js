import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StackNavigation from './StackNavigation';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function Navigation(props){

    return(
        <Drawer.Navigator initialRouteName="app" drawerContent={ (props) => <DrawerContent {...props} /> }>
            <Drawer.Screen name="app" component={StackNavigation} ></Drawer.Screen>
        </Drawer.Navigator>
    )

}