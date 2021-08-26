import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import NuevoPostScreen from '../screen/Home/NuevoPostScreen';
import Home from '../screen/Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Root() {
	return (
		<Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="NuevoPostScreen" component={NuevoPostScreen} />
		</Drawer.Navigator>

	);
}