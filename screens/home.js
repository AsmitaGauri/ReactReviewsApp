import React, { useState } from 'react';
import {StyleSheet,View,Text, FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';

// screens defined in HomeStack are automatically provided with navigation props
export default function Home({navigation}){

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
        // const pressHandler=()=>{
        //   // navigation.navigate('ReviewDetails');
        //   navigation.push('ReviewDetails');
        //   // Name should be the same as mentioned while defining screens on stack
        // }

        return (
          <View style={globalStyles.container}>
            <FlatList
            data={reviews}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                <Text style={globalStyles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
            />
            
          </View>
        );
    
}

