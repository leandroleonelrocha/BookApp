import React,{useState,useEffect, useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screen/Search';
import {Avatar} from 'react-native-paper';
import Tarjeta from '../screen/Perfil/Tarjeta';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors } from '../utils/tema';
import StackNavigation from '../navigations/StackNavigation';
import FirebaseContext from '../context/FirebaseContext';
const Tab = createBottomTabNavigator();
function TabNavigation(props){
    
    const {user, firebase, getUser} = useContext(FirebaseContext);

    /*
    const dispatch = useDispatch();
    const content = useSelector(state => state)
    const [user, setUser] = useState({});
    console.log(content)
    useEffect(() => {
        if(user.length === 0){
        dispatch(fetchUser());
        setUser(content.userState.currentUser)
        //dispatch(fetchUserPosts)
        }
      

        //setUser(content.userState.currentUser)


    }, []);
    */
    useEffect(() => {
        getUser()
        console.log(user)
        //props.getUser()
        //setUser(currentUser);
        //props.actions.fetchUserPosts()

    
        //setUser(content.userState.currentUser)


    }, []);

    console.log(user)
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false
            }}
        >   
            <Tab.Screen 
                name="StackNavigation" 
                component={StackNavigation} 
                options={{ 
                    title:'Root',
                    tabBarIcon: ({ tintColor }) => (
                    //Your icon component for example => 
                    <Icon name="home" size={30} color={colors.primary} />
                    )
                }} 
            
            />


            <Tab.Screen name="Buscar" 
                component={Search} 
                options={{ 
                    title:'Home',
                    tabBarIcon: ({ tintColor }) => (
                    //Your icon component for example => 
                    <Icon name="search" size={30} color={colors.primary} />
                    )
                }} 
            
            />
            
        

            <Tab.Screen name="Tarjeta" 
                component={Tarjeta} 
                options={{
                    tabBarIcon: ({}) => (
                        /*
                        <Avatar.Image size={24} source={user.img} />
                        <Icon name="search" size={30} color={colors.primary} />
                        */
                        <Avatar.Image size={24} source={user.img} />
                        
                    )   
                }}
            />

            
        </Tab.Navigator>
    )

}

/*
const mapStateToProps = (store) => ({ currentUser: store.userState.currentUser, posts: store.userState.posts})
//const mapDispatchProps = (dispatch) => bindActionCreators(fetchUser, dispatch)

function mapDispatchProps(dispatch){
    return {
      actions: bindActionCreators({
        fetchUser,     
        fetchUserPosts,
        clearData
      }, dispatch)
    }
  }



const mapDispatchProps = (dispatch, props) => {
    return bindActionCreators({
            fetchUser: fetchUser,
            fetchUserPosts: fetchUserPosts
        },
        dispatch
    );
};


const mapStateToProps = (state) => {
    return {
        currentUser: state.userState.currentUser,
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(fetchUser())
        }
    }
}
*/
export default TabNavigation;  
//export default connect(mapStateToProps, mapDispatchProps)(TabNavigation);