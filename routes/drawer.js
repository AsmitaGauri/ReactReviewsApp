import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import HomeStack from './HomeStack';
import AboutStack from './aboutStack';

const Stack=createDrawerNavigator();

export default Navigator=()=>(
    <NavigationContainer>

  
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeStack}/>
        <Stack.Screen name='About' component={AboutStack}/>

    </Stack.Navigator>
    </NavigationContainer>
);