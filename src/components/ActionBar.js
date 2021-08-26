import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Modal, Provider, Portal, TextInput} from 'react-native-paper';
import firebase from '../utils/firebase';
import 'firebase/database';

export default function Actionbar(props){
    const { user } = props
    const [visible, setVisible] = React.useState(false);
    const [form, setForm] = React.useState(null)
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const guardar = () => {
        
        firebase.database().ref('contactos/' + user.uid).push(form).then( () => console.log('ok'))
        /*
        db.collection('contactos')
        .add(form)
        .then( () => console.log('ok') )
        */
        setVisible(false)
        
       
    }

    return(
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                    <TextInput
                    label="Nombre"
                    style={styles.input}
                    underlineColor="#77c5d5"
                    onChange={ (e) => setForm({...form, nombre: e.nativeEvent.text }) }
                    /> 
                    <TextInput
                    label="Apellido"
                    style={styles.input}
                    underlineColor="#77c5d5"
                    onChange={ (e) => setForm({...form, apellido: e.nativeEvent.text }) }
                    />  
                    <TextInput
                    label="Email"
                    style={styles.input}
                    underlineColor="#77c5d5"
                    onChange={ (e) => setForm({...form, email: e.nativeEvent.text }) }
                    />  
                    <Button mode="contained" onPress={ guardar }>
                        Guardar datos
                    </Button>
                </Modal>
            </Portal>
            <View style={styles.footer}>
                <Button style={{marginTop: 30}} onPress={showModal} style={styles.btn}>
                    Nuevo
                </Button>
            </View>
            
        </Provider>
      
    )

}
const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: 'white', padding: 20
    },
    footer: {
        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    btn:{
        marginLeft: 'auto'
    },
    input:{
        height: 50,
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#f9f9f9'
    }

});