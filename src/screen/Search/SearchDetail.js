import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Touchable, ActivityIndicator} from 'react-native';
import { Text, Card, Button, Title,Paragraph, Avatar } from 'react-native-paper';
import firebase from '../../utils/firebase';
import 'firebase/database';
import {colors } from '../../utils/tema';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Perfil/Header';
import chunk from "lodash";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { color } from 'react-native-reanimated';
export default function SearchDetail({route}){
    const { item } = route.params;
    const [form, setForm] = useState({});
    const [changeForm, setChangeForm] = useState(true)
    const [image, setImage] = useState();

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };

    const SelectImage = () => {
        const options = {
          title: 'Subir Imagen',
          takePhotoButtonTitle: 'Tomar Foto',
          chooseFromLibraryButtonTitle: 'Elegir de la biblioteca',
          mediaType: 'photo',
          quality: 0.6,
          noData: true,
          maxWidth: 1280,
          maxHeight: 1280,
          storageOptions: {
            skipBackup: true,
            path: 'Siseo',
            cameraRoll: true,
          },
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImage({
              imagePath: response.uri,
              imageHeight: response.height,
              imageWidth: response.width
            });
      
          }
        });
    };
    
    const post = [
     [
        {
            id:1,
            img: 'https://picsum.photos/700'
        },
        {
            id:2,
            img: 'https://picsum.photos/700'
        },
        {
            id:3,
            img: 'https://picsum.photos/700'
        },
        {
            id:4,
            img: 'https://picsum.photos/700'
        },
        ]
    ];

    const update = () => {

        //console.log('contactos/' + user.uid + '/' + contacto.uid )
        
        firebase.database()
        .ref('contactos/' + user.uid  + '/-MR_u4TWEHXK-tDpF0Tw')
        .update(form)
        .then( () => console.log('ok'))
      
        console.log(form)
        
    }


    const updateForm = () => {
        setChangeForm(!changeForm)

    }

    console.log(changeForm)

    return(

        <View style={{ flex:1 }}>
            <ActivityIndicator />
            <ScrollView>
                <Header />
                <View  style={{ flexDirection: 'row', width: '100%', marginTop: 20  }}>
                    <View style={{ padding: 10 }}>
                        <TouchableOpacity>
                            <Image source={{uri:'https://picsum.photos/700'}} style={{ height: 100, width: 100, borderRadius: 50 }} />
                        </TouchableOpacity>  
                    </View>

                    <View style={{ padding: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>45</Text>
                        <Text style={{ marginTop: 5}}>Publicaciones</Text>
                    </View>

                    <View style={{ padding: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>45</Text>
                        <Text style={{ marginTop: 5}}>Publicaciones</Text>
                    </View>
                </View>

                <View  style={{ flexDirection: 'row' }}>
                    <View style={{ padding: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ item.key }</Text>
                        <Text style={{ fontSize: 15 }}>{ item.name }</Text>
                        <Text style={{ marginTop: 5}}>Publicaciones</Text>
                        <Text style={{ marginTop: 5}}>Publicaciones</Text>
                    </View>               
                </View>

                <View style={{ padding: 20, flexDirection: 'row' }}>

                    <View style={{ width: '47%'}}>
                        <Button mode="contained" onPress={updateForm} style={{ backgroundColor: colors.primary }}>
                            Seguir
                        </Button>
                    </View>

                    <View style={{ width: '47%'}}>
                        <Button mode="contained" onPress={updateForm} style={{ backgroundColor: colors.width, 
                        borderWidth: 0.3, 
                        borderColor: '#8B8B8B', 
                        marginLeft: 10
                        
                        }}>
                            <Text>Mensaje</Text>
                        </Button>
                    </View>
                </View>

                <View  style={{ flexDirection: 'row' }}>
                    <View style={{ padding: 20, marginTop: 10 }}>
                        <ScrollView >

                        {
                            chunk(post, 2).map((data, index) => (
                                
                                <TouchableOpacity
                                    key={index}
                                >
                                    <View style={{ width: '50%' }}>
                                        <Image 
                                            source={{ uri: 'https://picsum.photos/700' }}
                                            style={{
                                                width: 250,
                                                height: 250
                                            }}
                                        />
                                    </View>
                            
                                </TouchableOpacity>

                            ))

                            /*
                            [1,2,3,4,5,6,7,8,9].chunk((data, index) => (

                                <TouchableOpacity>
                                    <View style={{ width: '50%' }}>
                                        <Image 
                                            source={{ uri: 'https://picsum.photos/700' }}
                                            style={{
                                                width: 250,
                                                height: 250
                                            }}
                                        />
                                    </View>
                            
                                </TouchableOpacity>

                            ))
                            */
                            
                        }
                        
                        </ScrollView>
                    </View>               
                </View>
            </ScrollView>
        </View>
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