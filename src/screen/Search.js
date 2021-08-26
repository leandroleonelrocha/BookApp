import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import firebase from '../utils/firebase';
import 'firebase/database';
import 'firebase/firestore';
import { LogBox } from 'react-native';
import VideoComponent from '../components/Search/VideoComponent';
import Profile from '../assets/img/profile1.jpg';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export default function Search(props) {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
 
    const fetchUsers = (search) => {

        firebase.firestore()
        .collection("users")
        .where("name", ">=", search)
        //.where("name", "!=", "Prueba3")
        .get()
        .then((snapshot) => {
            
            let users = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            });
            setUsers(users);
           

        });

    }

    useEffect(() => {
        setUsers([]);

    }, [])
   

    return (

            <View style={{ flex: 1 }}>
                
                <View style={{ width: '90%', marginHorizontal:20, marginTop:20 ,alignContent: 'center', justifyContent: 'center'}}>
                    <Searchbar
                        placeholder="Type Here..."
                        onChangeText={(search) => fetchUsers(search)} 
                        style={{ borderRadius: 10, alignContent: 'center', justifyContent: 'center' }}
                    />
                </View>

                <ScrollView style={{ marginTop: 20, marginHorizontal: 20}}>

                    { users.length > 0 ? 
                    <FlatList
                        numColumns={1}
                        horizontal={false}
                        data={users}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("TarjetaSearch", {uid: item.id})} >
                                <View style={styles.viewList}>
                                    <View style={styles.viewListImage}>
                                        {
                                            item.img == '' ? (
                                                <Image source={Profile } style={{ height: 50, width: 50, borderRadius: 50 }} />
                                            ):(
                                                <Image source={{ uri: item.img }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                                            )
                                        }
                                    </View>
                                    <View style={ styles.viewListText }>
                                        <Text style={styles.item}>{item.key}</Text>
                                        <Text>{item.name}</Text>
                                    </View>                            
                                </View>
                            </TouchableOpacity>

                        )}
                    />  
                    :                    
                    <VideoComponent />
                    }
                </ScrollView>
                   
            </View>
  
    )
}

const styles = StyleSheet.create({
    viewList: {
        flexDirection: 'row',
        marginTop: 10
        
    },
    viewListImage: {
      //borderWidth: 1
    },
    viewListText:{
        marginLeft: 20,
        width: '65%',
        //borderWidth: 1,
        padding: 5
    },
    item:{
        fontSize: 15,
        fontWeight: 'bold'
    }


})