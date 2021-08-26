import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture/index';
import styles from './styles';
import MyCarousel from './MyCarousel';


export default function Story (props) {
    const [modalVisible, setModalVisible] = useState(false);
    const {imageUrl, name  } = props
    return(
        <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
        </View>
        </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <ProfilePicture uri={imageUrl} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        </View>

    )
}


