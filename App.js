import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Book } from './src/screens/';
import Tabs  from './src/navigation/Tabs';

const Stack = createStackNavigator();

export default function App(){

    const theme = {

        ...DefaultTheme,
        colors:{
            ...DefaultTheme.colors,
            border: "transparent"
        }

    }

    return (
       
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Book" component={Book} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
       

    )

}