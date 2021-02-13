import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Book, Search } from '../screens/';
import { COLORS, icons } from '../../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {

    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black
    }

}

export default function Tabs(){


    return(

        <Tab.Navigator 
        
            tabBarOptions={tabOptions}
            screenOptions={ ({route}) => ({

                tabBarIcon: ({focused}) => {

                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch(route.name){

                        case "Home": 
                        return(
                            <Image 
                                source={icons.dashboard_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 20
                                }}

                            />
                        )

                        case "Search": 
                        return(
                            <Image 
                                source={icons.search_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 20
                                }}

                            />
                        )

                        case "Notificaction": 
                        return(
                            <Image 
                                source={icons.notification_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 20
                                }}

                            />
                        )

                        case "Setting": 
                        return(
                            <Image 
                                source={icons.menu_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 20
                                }}

                            />
                        )

                    }



                }

            }

                

            )}

        >


        <Tab.Screen 
            name="Home"
            component={Home}
        />

        <Tab.Screen 
            name="Search"
            component={Home}
        />

        <Tab.Screen 
            name="Notificaction"
            component={Home}
        />
      
        <Tab.Screen 
            name="Setting"
            component={Home}
        />
       


        </Tab.Navigator>


    )


}