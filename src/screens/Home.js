import React from 'react';
import { View,Text, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import HeaderComponent from '../components/HeaderComponent';
export default function Home(){


    return (
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.black }}>
            <HeaderComponent />
        </SafeAreaView>
      
    )

}