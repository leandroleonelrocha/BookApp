import React,{useState} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { Text,Title, TextInput, Button } from 'react-native-paper';
import firebase from '../../utils/firebase';


export default function Login(props){
    const { cambiarForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [ errorData, setErrorData] = useState({});

    const login = () => {
        
        let errors = {};
        if (!formData.email || !formData.password) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;

        }else{
     
            firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .catch( () => {
                setErrorData({
                    email: true,
                    password: true
                })
                

            })
         
        }
  
        setErrorData(errors)
      
    }

    return(
        <>
            <Title>Login</Title>
            <TextInput
                label="Email"
                underlineColor="#77c5d5"
                style={styles.input}
                onChange={ (e) => setFormData({...formData, email: e.nativeEvent.text })  }
                error={errorData.email}
            />
            <TextInput
                label="Password"
                underlineColor="#77c5d5"
                style={styles.input}
                onChange={ (e) => setFormData({...formData, password: e.nativeEvent.text }) }
                error={errorData.password}
            />
            <Button style={styles.viewBtn}  mode="contained" onPress={login}>
                Enviar
            </Button>
            <View style={styles.sesion}>
                <TouchableOpacity onPress={cambiarForm}>
                    <Text>Registrarse </Text>
                </TouchableOpacity>
            </View>
        </>
    )

}

function defaultValue() {
    return {
      email: '',
      password: '',
    };
  }

const styles = StyleSheet.create({
    input:{
        height: 50,
        width: '80%',
        marginBottom: 20,
        backgroundColor: '#f9f9f9'
    },
    sesion:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom: 10
    }


})