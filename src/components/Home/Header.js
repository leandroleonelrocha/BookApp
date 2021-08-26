import React,{useState} from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors} from '../../utils/tema';

export default function Header(props){
    const { navigation } = props
   
    return(
        <Appbar.Header style={styles.content}>
            <Appbar.Content title="Social App" />
            <Appbar.Action icon="comment-plus" color={colors.primary} onPress={  () => {navigation.navigate('NuevoPostScreen')}  } />
            <Appbar.Action icon="message-text" color={colors.primary} onPress={() => {navigation.navigate('ChatScreen')} }/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({

    content:{
      backgroundColor: colors.white
    }

})