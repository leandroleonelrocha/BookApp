import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Image,ScrollView } from 'react-native';
import Header from '../components/Home/Header';
import posts from '../utils/data';
import Post from '../components/Post';
import Stories from '../components/Stories/index';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

export default function Home({navigation}){

    return(
      
       
        <SafeAreaView style={styles.container}>
            
            <Header navigation={navigation} />  
            <Stories />
           
           
            <ScrollView>
               {
                    posts.map((data, index) => (
                        <Post posts={data} key={index} />
                    ))

               }     

            </ScrollView>
        </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({

    container:{
        flex: 1,
    }
    
})

