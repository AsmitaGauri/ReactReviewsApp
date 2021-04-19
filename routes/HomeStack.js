import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
const Stack=createStackNavigator();

export default HomeStack=()=>(

        
        <Stack.Navigator
        screenOptions={{
            headerStyle:{backgroundColor:"#eee",height:90},
            headerTintColor:'#444'
        }}
        >
        
        {/* Instead of defining options for every screen which is same lets keep it default */}
        <Stack.Screen name='Home' component={Home} options={{title:"ReviewXoop"}}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title:"Reviews"}}/>

        </Stack.Navigator>
        
    
)