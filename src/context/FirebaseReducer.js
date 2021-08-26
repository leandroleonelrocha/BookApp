import {GET_USER, GET_POSTS} from './Type';
export default (state, action) => {

    switch(action.type){

        case GET_USER:
            return{
                ...state,
                user: action.payload
            }
            
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload
            }

        default:
            return state;

    }


}