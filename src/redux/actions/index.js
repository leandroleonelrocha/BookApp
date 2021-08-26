import firebase from '../../utils/firebase';
import 'firebase/firebase-firestore';
import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, CLEAR_DATA, IS_LOADING } from '../../redux/constants';

export function clearData() {
    return ((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}

export function isLoading(isLoading = false) {
    return {
        type: IS_LOADING,
        isLoading: isLoading
    }
}

export function fetchUser(){

    return((dispatch) => {

        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((resp) => {
                if(resp.exists){
                    console.log(resp)
                    dispatch({
                        type: USER_STATE_CHANGE,
                        currentUser: resp.data()
                    })
                }else{
                    console.log('does not exist')
                }
            })

    })

}

export function fetchUserPosts(){
    return((dispatch) => {

        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((resp) => {
                
                let posts = resp.docs.map( doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return {id, ...data}
                });
                dispatch({
                    type: USER_POSTS_STATE_CHANGE,
                    posts: posts
                })

            })

    })

}
