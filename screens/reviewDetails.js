import React from 'react';
import {StyleSheet,View,Text, Image} from 'react-native'
import {globalStyles,images} from '../styles/global';
import Card from '../shared/card'
export default function ReviewDetails({navigation,route}){


    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>Rating :</Text>
                    <Image source={images.ratings[route.params.rating]}/>
                </View>
                
            </Card>
        </View>
    );
}

const styles=StyleSheet.create({
    rating :{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        borderTopWidth:1,
        borderTopColor:"#eee",
        marginTop:15,
        paddingTop:15,
    }
})
