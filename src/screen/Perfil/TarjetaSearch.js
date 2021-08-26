import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Touchable,  Alert, Platform, ActivityIndicator} from 'react-native';
import { Text, Card, Button, Title,Paragraph, Avatar } from 'react-native-paper';
import firebase from '../../utils/firebase';
import 'firebase/database';
import {colors } from '../../utils/tema';
import Profile from '../../assets/img/profile1.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Perfil/Header';
import {chunk, isEmpty} from "lodash";
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import 'firebase/auth';
import 'firebase/firebase-storage';
import 'firebase/firebase-firestore';
import { LogBox } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Update  from './Update';
import { fetchUser, fetchUserPosts } from '../../redux/actions/index';
function TarjetaSearch(props){
    const {currentUser, posts, actions } = props
    const [postUser, setPostsUser] = useState([]);
    const [changeForm, setChangeForm] = useState(false)
    const [loading , setLoading] = useState(true)
    const [user, setUser] = useState(null);
    
    useEffect(() => {
       
            
        firebase.firestore().collection("users")
        .doc(props.route.params.uid)
        .get()
        .then((doc) => {
            if(doc.exists){
                setUser(doc.data())
            }else{
                console.log('does not exist')
            }
        })

        firebase.firestore()
            .collection("posts")
            .doc(props.route.params.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                setPostsUser(posts)
        })
        setLoading(false);
   
        


    }, [props.route.params]);
   


    if (loading) {
        return <ActivityIndicator />;
    }

    return(

        <View style={{ flex:1}}>
        <ScrollView>
            <Header />

            <View  style={{ flexDirection: 'row', width: '100%', marginTop: 20  }}>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity>
                        
                        { !user || user.img === '' ? 
                        <Image source={ Profile }  style={{ height: 100, width: 100, borderRadius: 50 }} />
                        :
                        <Image source={{ uri: user.img }}  style={{ height: 100, width: 100, borderRadius: 50 }} />
                        
                        }
                    </TouchableOpacity>  
                </View>

                <View style={{ padding: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ postUser.length}</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                </View>

              
            </View>

            <View  style={{ flexDirection: 'row' }}>
                <View style={{ padding: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ user ? user.name : '' }</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                    <Text style={{ marginTop: 5}}>Publicaciones</Text>
                </View>               
            </View>

            <View style={{ padding: 20 }}>
                { props.route.params === undefined ?
                    <Button mode="contained" onPress={updateForm} style={{ backgroundColor: colors.primary }}>
                        Editar perfil
                    </Button>
                :
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ justifyContent:'flex-start', width: '50%', alignContent:'flex-start'}}>
                            <Button mode="contained" onPress={ () => console.log('asdas')} style={{ backgroundColor: colors.primary }}>
                                Seguir
                            </Button>
                        </View>
                        <View style={{ justifyContent:'flex-end', width: '50%', alignContent:'flex-end'}}>
                            <Button mode="contained" onPress={ () => console.log('asdas')} style={{ backgroundColor: colors.primary }}>
                                Mensaje
                            </Button>
                        </View>
                    </View>
                }
            </View>


                <View style={{ padding: 20, marginTop: 10 }}>
                { postUser.length === 0 ? 
                    (
                        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                                <Text>Aún no hay publicaciones</Text>
                            </View>
                        </View>
                    ) : 
                    (
                    
                    <FlatList
                        numColumns={3}
                        horizontal={false}
                        data={postUser}
                        renderItem={({ item }) => (
                            <View
                                style={styles.containerImage}>

                                <Image
                                    style={styles.image}
                                    source={{ uri: item.downloadURL }}
                                />
                            </View>
                        )}
                    />
                    )
                }
                </View>                          
            </ScrollView>
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
    containerImage:{
        flex: 1 / 3
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

export default TarjetaSearch;



