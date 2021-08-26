import React, {useReducer} from 'react';
import firebase from '../firebase';
import FirebaseReducer from './FirebaseReducer';
import FirebaseContext from './FirebaseContext';
import {GET_USER, GET_POSTS} from './Type';


const FirebaseState = (props) => {

    const initialState = {
        user: [],
        posts: []
        
    }

    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState)

    const getPosts = () => {
        firebase.db
        .collection("posts")
        .doc(firebase.auth.currentUser.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            })
            dispatch({
                type: GET_POSTS,
                payload: posts
            })
        })
    }

    const getUser = () => {
        /*
        firebase.db.collection('productos').where('existencia', '==', true).onSnapshot(manejarSnapshot)
        
        function manejarSnapshot(snapshot){
            const platos = snapshot.docs.map( doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            platosOrder = _.sortBy(platos, 'categoria')

            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platosOrder
            })

        }
        */

        firebase.db
        .collection("users")
        .doc(firebase.auth.currentUser.uid)
        .get()
        .then((resp) => {
            if(resp.exists){
                console.log(resp)
                dispatch({
                    type: GET_USER,
                    payload: resp.data()
                })
            }else{
                console.log('does not exist')
            }
        })

    }

    return(

        <FirebaseContext.Provider
            value={{
                user: state.user,
                posts: state.posts,
                firebase,
                getUser,
                getPosts
            }}
        >
            {props.children}
        </FirebaseContext.Provider>

    )

}

export default FirebaseState;