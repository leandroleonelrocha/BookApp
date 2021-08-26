import React, {useState, useEffect, useContext} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Touchable,  Alert, Platform} from 'react-native';
import { Text, Card, Button, Title,Paragraph, Avatar } from 'react-native-paper';
import {colors } from '../../utils/tema';
import Profile from '../../assets/img/profile1.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FirebaseContext from '../../context/FirebaseContext';
export default function Update(props) {
    const { setChangeForm } = props
    const {user, firebase} = useContext(FirebaseContext);

    const [formData, setFormData] = useState({username: user.name, email: user.email, img: user.img });
    const [image, setImage] = useState();

    useEffect(() => {
      console.log(firebase)
    }, [])

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };

    console.log(formData)
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
          includeBase64: true,
          storageOptions: {
            skipBackup: true,
            path: 'Siseo',
            cameraRoll: true,
          },
        };

        launchImageLibrary( options, response =>  {
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
                    imageWidth: response.width,
                    origURL: response.origURL,
                    base64: response.base64
                });
            }

        });

    };

    const updatePerfil = async (downloadURL) => {

        await firebase.db
            .collection('users')
            .doc(firebase.auth.currentUser.uid)
            .update({
                name: formData.name,
                //email: this.state.email,
                img: downloadURL,
                profile: false
            }).then((function () {
                console.log('ok')
                //props.navigation.popToTop()
            }))
    }

    const uploadImage = async () => {
        
        if(image == null){
            updatePerfil(user.img)
        }else{
            const uri = image.imagePath;
            const childPath = `users/${firebase.auth.currentUser.uid}/${Math.random().toString(36)}`;

            const response = await fetch(uri);
            const blob = await response.blob();

            const task = firebase.db
                .ref()
                .child(childPath)
                .put(blob);

            const taskProgress = snapshot => {
                console.log(`transferred: ${snapshot.bytesTransferred}`)
            }

            const taskCompleted = () => {
                task.snapshot.ref.getDownloadURL().then((snapshot) => {
                    updatePerfil(snapshot);
                    console.log(snapshot)
                    setChangeForm(false)
                })
            }

            const taskError = snapshot => {
                console.log(snapshot)
            }

            task.on("state_changed", taskProgress, taskError, taskCompleted);
        }
    }
 
    return(
        <View>
        <View  style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{marginTop: 10 }}>
                { 
                    image != null
                    ? <Image source={{ uri: image.imagePath }}  style={{ height: 100, width: 100, borderRadius: 50 }} />
                    : ( user.img == null
                        ? <Image source={ Profile }  style={{ height: 100, width: 100, borderRadius: 50 }} />
                        : <Image source={{ uri: user.img }}  style={{ height: 100, width: 100, borderRadius: 50 }} />
                    )
                }
            </TouchableOpacity>  

            <Text style={{
                    marginTop: 10,
                    fontSize: 20,
                    color: colors.blue
                }}
                onPress={SelectImage}
            >
                Cambiar foto de perfil
            </Text>
        </View>

        </View>
        <View 
        style={{
            paddingHorizontal: 20,
            marginTop: 10

        }}
        >
        <TextInput 
            placeholder="Nombre"
            style={{
                fontSize: 15,
                height: 50,
                borderBottomWidth: 0.3

            }}
            onChange={ (e) => setFormData({...formData, name: e.nativeEvent.text })  }
            defaultValue={ user.name}
        />
        </View>
        <View 
        style={{
            paddingHorizontal: 20,
            marginTop: 10
        }}
        >

        </View>
        <View 
        style={{
            paddingHorizontal: 20,
            marginTop: 10

        }}
        >
        <TextInput 
            placeholder="Sitio web"
            style={{
                fontSize: 15,
                height: 100,
                borderBottomWidth: 0.3
            }}
            onChange={ (e) => setFormData({...formData, sitio: e.nativeEvent.text })  }

        />
        </View>
        <View 
        style={{
            paddingHorizontal: 20,
            marginTop: 10
        }}
        >
        <TextInput 
            placeholder="Email"
            style={{
                fontSize: 15,
                height: 50,
                borderBottomWidth: 0.3
            }}
            onChange={ (e) => setFormData({...formData, email: e.nativeEvent.text })  }
            defaultValue={user.email}
        />
        </View>
        <View 
        style={{
            paddingHorizontal: 20,
            marginTop: 20,
            flexDirection:'row'

        }}
        >

        <View 
            style={{  width: '50%',alignItems:'flex-start'}}
        >
            <TouchableOpacity
                onPress={ () => setChangeForm(false) }
            >
                <Icon name="close" size={30} color={colors.primary} />
            </TouchableOpacity>
        </View>   
        <View
            style={{ width: '50%',alignItems:'flex-end', marginBottom: 20}}
        >
            <TouchableOpacity
                onPress={ uploadImage }
            >
                <Icon name="check" size={30} color={colors.primary} />
            </TouchableOpacity>
        </View>   

        </View>
        </View>
    )

}
