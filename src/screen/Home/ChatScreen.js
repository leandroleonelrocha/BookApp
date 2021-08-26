import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { colors} from '../../utils/tema';
import { Searchbar } from 'react-native-paper';
import { ScrollView,  } from 'react-native-gesture-handler';
import camera from '../../assets/icons/camera1.png';

export default function ChatScreen(){

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

 
    return(
        <>
        <View style={{ flex: 1 }}>
            <View style={{ width: '90%', marginHorizontal:20, marginTop:20 ,alignContent: 'center', justifyContent: 'center'}}>
                <Searchbar
                    placeholder="Buscar"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ borderRadius: 10, alignContent: 'center', justifyContent: 'center' }}
                />
            </View>
            <View style={{ flexDirection: 'row',  marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                <Text style={{ fontSize: 20 }}>Mensajes</Text>
                
            </View>

            <ScrollView style={{ marginTop: 20, marginHorizontal: 20}}>
                <FlatList
                    
                    data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Julie1'},
                    {key: 'Julie2'},
                    {key: 'Julie3'},
                    {key: 'Julie4'},
                    {key: 'Julie5'},
                    {key: 'Julie6'},
                    {key: 'Julie7'},
                    {key: 'Julie8'},

                    ]}
                    renderItem={ ({item}) => 
                    <View style={styles.viewList}>
                        <View>
                            <Image source={{uri:'https://picsum.photos/700'}} style={{ height: 50, width: 50, borderRadius: 50 }} />
                        </View>
                        <View style={{ marginLeft: 10, width: '65%' }}>
                            <Text style={styles.item}>{item.key}</Text>
                            <Text>Hola que tal?</Text>
                        </View>

                        <View style={{ marginLeft: 10, alignContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 15
                                }}
                            >
                                <Image source={camera} style={{ height: 20, width: 20, tintColor: colors.primary }} />
                            </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                    
                    }
                />
            </ScrollView>
           
        </View>
       
        </>
        
    )
}

const styles = StyleSheet.create({

    content:{
      backgroundColor: colors.primary3
    },
    item:{
        //padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
        //height: 44,
    },
    viewList:{
     
        flexDirection: 'row',
        padding: 5,
        marginTop: 10
    }

})