import React, {useState, useEffect, useContext} from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Touchable,  Alert, Platform, ActivityIndicator} from 'react-native';
import { Text, Card, Button, Title,Paragraph, Avatar } from 'react-native-paper';
import {colors } from '../../utils/tema';
import Profile from '../../assets/img/profile1.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Perfil/Header';
import Update  from './Update';
import FirebaseContext from '../../context/FirebaseContext';
import {useNavigation} from '@react-navigation/native'
function Tarjeta(props){
    
    const { user, getUser, posts, getPosts }  = useContext(FirebaseContext);

    const [postUser, setPostsUser] = useState([]);
    const [changeForm, setChangeForm] = useState(false)
    const [loading , setLoading] = useState(true)
    const navigation = useNavigation();
    
    useEffect(() => {
        getUser();
        getPosts();
        setPostsUser([])
        setLoading(false);

    }, []);
  
    console.log(posts)
    const updateForm = () => {
        setChangeForm(!changeForm)
    }

    if (loading) {
        return <ActivityIndicator />;
    }

    return(

        <View style={{ flex:1}}>
        <ScrollView>
            <Header />

            { !changeForm ? (
            <>
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{posts.length}</Text>
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
                
                <Button mode="contained" onPress={updateForm} style={{ backgroundColor: colors.primary }}>
                    Editar perfil
                </Button>
           
            </View>


                <View style={{ padding: 20, marginTop: 10 }}>
                
                { posts.length < 0 ? 
                    (
                        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                                <Text>Aún no hay publicaciones</Text>
                            </View>
                        </View>
                    ) : 
                    (
                    <FlatList
                        numColumns={3}
                        horizontal={false}
                        data={posts}
                        renderItem={({ item }) => (
                            <View style={styles.containerImage}>
                                <TouchableOpacity onPress={ () =>  navigation.navigate('UpdatePost', { id:  item.id}) }>
                                    <Image style={styles.image} source={{ uri: item.downloadURL }} />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    )
                }
                
                </View>               

            </>
            )
            :
            (
               <Update user={user} setChangeForm={setChangeForm}  />
            )}
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


export default Tarjeta;  




