import React from 'react';
import { List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function Lista(props){
   
    const { contacto,user } = props;
    const navigation = useNavigation();
    
    return(
    <List.Item
        title={contacto.nombre}
        description={contacto.email}
        left={props => <List.Icon {...props} icon="folder" />}
        onPress={() => navigation.navigate('tarjeta', { contacto, user} )}
    />  
    )

}