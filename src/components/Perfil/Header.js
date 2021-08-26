import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors} from '../../utils/tema';
import firebase from '../../utils/firebase';

export default function Header(props){
    const { navigation } = props
    
    return(
        <Appbar.Header style={styles.content}>
            
            <Appbar.Content title="Social App" />
            <Appbar.Action icon="logout" onPress={() => firebase.auth().signOut() }/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({

    content:{
    
      backgroundColor: colors.primary3
    }

})