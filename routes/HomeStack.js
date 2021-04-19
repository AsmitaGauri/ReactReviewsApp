import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Image} from 'react-native'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
const Stack=createStackNavigator();

export default HomeStack=({navigation})=>(

        
        <Stack.Navigator
        screenOptions={{
            headerStyle:{backgroundColor:"#eee",height:90},
            headerTintColor:'#444'
        }}
        >
        
        {/* Instead of defining options for every screen which is same lets keep it default */}
        <Stack.Screen name='Home' component={Home} options={{headerTitle:()=><Header navigation={navigation} 
        title="ReviewsApp"/>,headerBackground:()=><Image source={require("../assets/game_bg.png")} style={{height:90}}/>}}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title:"ReviewDetails"}}/>

        </Stack.Navigator>
        
    
)