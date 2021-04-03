import React, { useState } from 'react';
import {StyleSheet,View,Text, Button} from 'react-native'
import {globalStyles} from '../styles/global';

// screens defined in HomeStack are automatically provided with navigation props
export default function Home({navigation}){
    
        const pressHandler=()=>{
          // navigation.navigate('ReviewDetails');
          navigation.push('ReviewDetails');
          // Name should be the same as mentioned while defining screens on stack
        }

        return (
          <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Home Screen</Text>
            <Button title='Go to Review Dets' onPress={pressHandler}/>
          </View>
        );
    
}

