import React, { useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper';
import firebase from '../utils/firebase';


export default function DrawerContent(props){
    const { navigation} = props;
    const [active, setActive] = useState('home');
    
    const onChangeScreen = (screen) => {
        setActive(screen)
        navigation.navigate(screen)
    }

    return(
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Home" active={ active === 'home'} onPress={ () => onChangeScreen('home') } />
                <Drawer.Item label="Perfil" active={ active === 'tarjetas'} onPress={ () => onChangeScreen('tarjetas') } />
            </Drawer.Section>       
            <Drawer.Section title="Opciones">
                <TouchableRipple>
                    <View style={styles.preferences}>
                        <Text onPress={() => firebase.auth().signOut()}>Cerrar sesión</Text>
                    </View>
                </TouchableRipple>
            </Drawer.Section>    
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({

    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});