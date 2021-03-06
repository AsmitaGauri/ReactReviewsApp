import React from 'react';
import {StyleSheet,View,Text, Image, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}){
    const openMenu=()=>{
        navigation.openDrawer();
        // since only screens mentions inside stack have navigation prop, this dosent so we need to manually pass it
    }

    return(
        <View style={styles.header}> 
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require("../assets/heart_logo.png")} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:"100%",
    
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position:'absolute',
        left:16
    },
    headerImage :{
        width:30,
        height:30,
        marginHorizontal:15
    },
    headerTitle :{
        display: 'flex',
        flexDirection :'row',
    }
})
