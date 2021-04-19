import React, { useState } from 'react';
import {StyleSheet,View,Text, FlatList, Modal} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
// screens defined in HomeStack are automatically provided with navigation props
export default function Home({navigation}){

  const [modalOpen,setModalOpen]=useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);


        return (
          <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
              <View style={styles.modalContent}>
                <MaterialIcons name="close" size={24} onPress={()=>setModalOpen(true)} onPress={()=>setModalOpen(false)} style={{...styles.modalToggle,...styles.modalClose}}/>
                <Text>Hii i am modal!</Text>
              </View>
              
            </Modal>
            <MaterialIcons name="add" size={24} onPress={()=>setModalOpen(true)} style={styles.modalToggle}/>
            <FlatList
            data={reviews}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                <Card>
                  <Text style={globalStyles.text}>{item.title}</Text>
                </Card>
                
              </TouchableOpacity>
            )}
            />
            
          </View>
        );
    
}

const styles=StyleSheet.create({
  modalToggle :{
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    borderRadius:10,
    alignSelf :'center'
  },
  modalClose :{
    borderColor: '#f2f2f2',
    marginTop: 10,
    marginBottom:0
  },
  modalContent: {
    flex:1
  }
})