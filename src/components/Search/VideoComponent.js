import React from 'react'
import {  Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';

export default function VideComponent() {

    const data = [

        {
            id: 1,
            imgUrl: 'https://picsum.photos/700',
            name: 'Pedro'
        },
        {
            id: 2,
            imgUrl: 'https://picsum.photos/700',
            name: 'Rodrigo'
        },
        {
            id: 3,
            imgUrl: 'https://picsum.photos/700',
            name: 'Martin'
        },
        {   
            id: 4,
            imgUrl: 'https://picsum.photos/700',
            name: 'Lucas'
        },
        {
            id: 5,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero1'
        },
        {   
            id: 6,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero2'
        },
        {   
            id: 7,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero3'
        },
        {   
            id: 8,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero4'
        },
        {
            id: 9,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero5'
        },
        {
            id: 10,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero6'
        },
        {
            id: 11,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero7'
        },
        {
            id: 12,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero8'
        },
        {
            id: 13,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero9'
        },
        {
            id: 14,
            imgUrl: 'https://picsum.photos/700',
            name: 'Romero10'
        },
    
    ]

    return (

        <FlatList
            data={data}
            key={data.id}
            renderItem={ ({item}) => 
            <TouchableOpacity>
                <View style={styles.viewList}>
                    <Image source={{uri:'https://picsum.photos/700'}} style={{ height: 250, width: '100%', borderRadius: 10 }} />
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

    item:{
        fontSize: 15,
        fontWeight: 'bold'
    }


})