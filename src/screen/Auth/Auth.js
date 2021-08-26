import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Registro from '../Auth/Registro';
import Login from '../Auth/Login';
import Logo from '../../assets/img/logo.png';
export default function Auth(){

    const [isLogin, setIsLogin] = useState(false);
    const cambiarForm = () => {
        setIsLogin(!isLogin)
    }

    return(
        <View style={styles.content} >
            <Image style={styles.img} source={Logo} />
            { !isLogin ? (
                <Login cambiarForm={cambiarForm} />
            ) : (
                <Registro cambiarForm={cambiarForm} />
            )}
        </View>
    )

}

const styles = StyleSheet.create({
    content:{
      flex: 1,
      alignItems: 'center'
    },
    img:{
        width: '80%',
        height: 250,
        marginTop: 50,
        marginBottom: 50
    }
  })  
  