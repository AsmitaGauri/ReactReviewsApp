import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native'
import {globalStyles} from '../styles/global';

export default function ReviewDetails({navigation,route}){


    return(
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.rating}</Text>
            <Text>{route.params.body}</Text>
        </View>
    );
}

