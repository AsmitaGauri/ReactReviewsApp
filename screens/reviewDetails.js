import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native'
import {globalStyles} from '../styles/global';
import Card from '../shared/card'

export default function ReviewDetails({navigation,route}){


    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.rating}</Text>
                <Text>{route.params.body}</Text>
            </Card>
        </View>
    );
}

