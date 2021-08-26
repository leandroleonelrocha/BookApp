import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NuevoPostScreen from '../screen/Home/NuevoPostScreen';
import Home from '../screen/Home';
import ChatScreen from '../screen/Home/ChatScreen';
import SearchDetail from '../screen/Search/SearchDetail';
import TarjetaSearch from '../screen/Perfil/TarjetaSearch';
import UpdatePost from '../screen/Perfil/UpdatePost';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;

  return (
    <Stack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        headerShown: false

            }}
    >

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      
      <Stack.Screen
        name="NuevoPostScreen"
        component={NuevoPostScreen}
        options={{
          title: 'Nuevo Post',
        }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: 'Chat',
        }}
      />
      <Stack.Screen
        name="SearchDetail"
        component={SearchDetail}
        options={{
          title: 'Search Detail',
        }}
      />
      <Stack.Screen
        name="TarjetaSearch"
        component={TarjetaSearch}
        options={{
          title: 'Tarjeta Search',
        }}
      />
      <Stack.Screen
        name="UpdatePost"
        component={UpdatePost}
        options={{
          title: 'Update Post',
        }}
      />

      
      
    </Stack.Navigator>
  );
}