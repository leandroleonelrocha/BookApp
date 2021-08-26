import React from 'react';
import {View, Text } from 'react-native';
import ProfilePicture from '../../../ProfilePicture/index';

const Header = ({imageUrl, name}) => (

    <View>
        <ProfilePicture uri={imageUrl} />
        <Text>{name}</Text>
    </View>
   
)

export default Header;