import React, {useState, useEffect, useContext} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Touchable,  Alert, Platform, ActivityIndicator} from 'react-native';
import { Text, Card, Button, Title,Paragraph, Avatar } from 'react-native-paper';
import {colors } from '../../utils/tema';
import Profile from '../../assets/img/profile1.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Perfil/Header';
import Update  from './Update';
import FirebaseContext from '../../context/FirebaseContext';
import Icon from 'react-native-vector-icons/FontAwesome';


function UpdatePost(props){
  
    const {id} = props.route.params;
    const [post, setPost] = useState();
    const [formData, setFormData] = useState();
    const {firebase} = useContext(FirebaseContext)
    console.log(post)

    useEffect(() => {
        const obtenerPost = () => { 

            firebase.db.collection('posts')
                .doc(firebase.auth.currentUser.uid)
                .collection('userPosts')
                .doc(id)
                .get()
                .then((doc) => {
                    setPost(doc.data())
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }

        obtenerPost();
    
    }, []);

    const updatePost = (post) => {
        console.log(post)
    }

  


    return(

        <View style={{ flex:1 }}>

            <Image 
                source={{ uri: post.downloadURL }}
                style={{ height: 200, width: '90%', marginHorizontal: 20, marginTop: 20}}
            />

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
                placeholder="Descipcion"
                style={{
                    fontSize: 15,
                    height: 50,
                    borderBottomWidth: 0.3
                }}
                onChange={ (e) => setFormData({...formData, caption: e.nativeEvent.text })  }
                defaultValue={ post.caption }

                
            />
            </View>
            <View 
            style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection:'row'

            }}
            >

            <View style={{  width: '50%',alignItems:'flex-start'}} >
                <TouchableOpacity>
                    <Icon name="close" size={30} color={colors.primary} />
                </TouchableOpacity>
            </View>   
            <View style={{ width: '50%',alignItems:'flex-end', marginBottom: 20}}>
                <TouchableOpacity>
                    <Icon name="check" size={30} color={colors.primary} />
                </TouchableOpacity>
            </View>   

            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: 'white', padding: 20
    },
    containerGallery:{
        padding: 20, 
        marginTop: 10 
    },  
    containerImage: {
        flex: 1 / 3

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
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }

});


export default UpdatePost;  




