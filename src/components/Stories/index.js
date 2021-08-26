import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../Story/index';

const data = [

    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Pedro'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Rodrigo'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Martin'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Lucas'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero1'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero2'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero3'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero4'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero5'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero6'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero7'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero8'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero9'
    },
    {
        imgUrl: 'https://picsum.photos/700',
        name: 'Romero10'
    },
 
   


]

const Stories = () => (

    <FlatList 
        data={data}
        keyExtractor={ ({name}) => name }
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={ ({item}) => <Story imageUrl={item.imgUrl} name={item.name} /> }
        
    />
 



)

export default Stories;