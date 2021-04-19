import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import About from '../screens/about';


const Stack=createStackNavigator();

export default AboutStack=()=>(
 
        <Stack.Navigator
        screenOptions={{
            headerStyle:{backgroundColor:"#eee",height:90},
            headerTintColor:'#444'
        }}
        >
        {/* since drawer naigator dosent come with header thats why we have developed s seprate stack for about to get the header */}
        {/* Instead of defining options for every screen which is same lets keep it default */}
        <Stack.Screen name='About' component={About} options={{title:"About"}}/>
      

        </Stack.Navigator>
        

)