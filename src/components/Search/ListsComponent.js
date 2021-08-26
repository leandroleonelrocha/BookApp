import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity, Touchable} from 'react-native';
import { Text } from 'react-native-paper';


export default function ListsComponent(props){
    
    const { listUser } = props
    console.log(props)
    return(

        <FlatList
            data={listUser}
            renderItem={ ({item}) => 
            <TouchableOpacity
                onPress={ () => navigation.navigate('SearchDetail', {item}) }
            >
                <View style={styles.viewList}>
                    <View style={styles.viewListImage}>
                        <Image source={{uri:'https://picsum.photos/700'}} style={{ height: 50, width: 50, borderRadius: 50 }} />
                    </View>
                    <View style={ styles.viewListText }>
                        <Text style={styles.item}>{item.key}</Text>
                        <Text>{item.username}</Text>
                    </View>                            
                </View>
            </TouchableOpacity>
            
            }
        />
     
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