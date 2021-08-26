import React from 'react';
import {View, Text} from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';


const Post = ( {posts: {user} }) => (

    <View>
        <Header imageUrl={user.imageUrl} name={user.name} />
        <Body />
        <Footer />
    </View>



)

export default Post;