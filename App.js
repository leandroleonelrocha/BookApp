/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import Auth from './src/screen/Auth/Auth';
import {decode, encode} from 'base-64';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';
import FirebaseState from './src/context/FirebaseState';

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App(){

  const [user, setUser] = useState(undefined);
  const [visible, setVisible ] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return(
  <PaperProvider>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView style={styles.content}>
    
    { user ? (
      <FirebaseState>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </FirebaseState>
     
     
    ) : (
      <Auth />
    )}
    </SafeAreaView>
          
  </PaperProvider>
    
  )

 

  

}

const styles = StyleSheet.create({
  content:{
    height: '100%',
    //backgroundColor: colors.primary3,
  }
})  
