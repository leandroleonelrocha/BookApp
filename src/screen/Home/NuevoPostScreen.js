import React,{useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Button, TouchableOpacity, Image, TextInput, Touchable, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {chunk, isEmpty} from "lodash";
import FirebaseContext from '../../context/FirebaseContext';
export default function NuevoPostScreen(){
    const {firebase, user} = useContext(FirebaseContext)
    const [ image, setImage ] = useState({})
    const [ listUbicacion, setListUbicacion ] = useState([]);
    const [ newPost, setNewPost ] = useState({});
  
    
    useEffect(() => {
      console.log(firebase)

    }, []);

    const addUbicacion = (item) => {
      const it = [];

    }

    console.log(image)

    // Seleccionar imagen
    const ubicaciones = [
      {
        id: "1",
        title: "San Justo", 
      },
      {
        id: "2",
        title: "Ciudad Evita", 
      },
      {
        id: "3",
        title: "Isidro Casanova", 
      },
      {
        id: "4",
        title: "La Tablada", 
      },
      {
        id: "5",
        title: "Ramos Mejia", 
      },
      {
        id: "6",
        title: "Caseros ", 
      },

    ];

    const dataSource = [
      "Volvo", "Alpha Sports", "Ford", "Gräf & Stift", "Aston Martin", "BMW", "Tarrant Automobile","Push", "Österreichische Austro-Fiat", "Mazda", "Rosenbauer"
    ];

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

  const uploadImage = async () => {
    
    if(image == null){
      storePost(user.img)
    }else{
        const uri = image.imagePath;
        const childPath = `post/${firebase.auth.currentUser.uid}/${Math.random().toString(36)}`;

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase.storage
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                storePost(snapshot);
                console.log(snapshot)
        
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }
  }

  const storePost = async (downloadURL) => {

    await firebase.db
        .collection('posts')
        .doc(firebase.auth.currentUser.uid)
        .add({
          userId: user.uid,
          post: newPost.post,
          postImg: downloadURL,
          //postTime: firestore.Timestamp.fromDate(new Date()),
          likes: null,
          comments: null,
        })
        .then((function () {
            console.log('ok')
            //props.navigation.popToTop()
        }))
  }

  const storePostOld = async () => {

      let imgRecord = await uploadImage();
      //console.log(newPost)
      //return false;

      firebase.db
      .collection('posts')
      .add({
        userId: user.uid,
        post: newPost.post,
        postImg: imgRecord,
        //postTime: firestore.Timestamp.fromDate(new Date()),
        likes: null,
        comments: null,
      })
      .then(() => {
        console.log('Post Added!');
        Alert.alert(
            'Post published!',
            'Your post has been published Successfully!',
        );
        setNewPost(null);
      })
      .catch((error) => {
        console.log('Something went wrong with added post to firestore.', error);
      });

  }

  return (

    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity style={{padding: 20}}>
          { !user || user.img === '' ? 
            <Image source={ Profile }  style={{ height: 50, width: 50, borderRadius: 50 }} />
          :
            <Image source={{ uri: user.img }}  style={{ height: 50, width: 50, borderRadius: 50 }} />
          
          }
        </TouchableOpacity>  
        <TextInput 
          style={{ width: '70%', height: 50,  marginTop:20 }}
          placeholder="Escribe un pie de foto o video..."
          onChange={ (e) => setNewPost({...newPost, post: e.nativeEvent.text })  }

        />
      </View>

      <View style={{ borderWidth: 0.5, borderColor: '#AEABAB', padding: 20  }}>
        <Text style={{ fontSize: 15}}>Etiquetar personas</Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: '#AEABAB', padding: 20  }}>
        <Text style={{ fontSize: 15}}>Agregar ubicación</Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: '#AEABAB', padding: 10, flexDirection: 'row'  }}>
        
        <FlatList 
          data={ubicaciones}
          keyExtractor={ ({id}) => id }
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={ ({item, index}) => ( 

            <TouchableOpacity
              onPress={ () => { addUbicacion(item) } }
            > 
              <View style={{ width: 150, height: 30, backgroundColor: '#E7E7E7', marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text >{item.title}</Text>
              </View>
              
            </TouchableOpacity>

          )}
          style={{ padding: 10 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        { isEmpty(image) ? 

        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{ backgroundColor: '#E7E7E7', width: 150, height: 50, justifyContent: 'center', alignItems:'center' }}
            onPress={ SelectImage }
          >
          <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>
        </View>
        
        :

        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Image 
            source={{uri: image.imagePath }}
            style={{
              width: '50%',
              height: '50%'
            }}
          />
          
          <TouchableOpacity 
            style={{ backgroundColor: '#E7E7E7', width: 100, height: 30, justifyContent: 'center', alignItems:'center', marginTop: 10 }}
            onPress={ uploadImage }
          >
            <Text>Guardar</Text>
          </TouchableOpacity>
        </View>
        

        }
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)",
  },
 
    
});