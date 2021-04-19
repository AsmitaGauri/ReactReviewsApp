import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';

export default function ReviewForm({addReview}) {
    return(
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            onSubmit={(values,actions)=>{
                actions.resetForm();
                addReview(values);
            }}
            >
            {
                (formikProps)=>(
                    <View>
                        <TextInput
                         style={globalStyles.input}
                         placeholder="Review Title"
                         onChangeText={formikProps.handleChange('title')}
                         value={formikProps.values.title}
                        />

                        <TextInput
                         style={globalStyles.input}
                         placeholder="Review body"
                         onChangeText={formikProps.handleChange('body')}
                         value={formikProps.values.body}
                        />

                        <TextInput
                         style={globalStyles.input}
                         placeholder="Rating (1-5)"
                         onChangeText={formikProps.handleChange('rating')}
                         value={formikProps.values.rating}
                         keyboardType="numeric"
                        />

                        <Button title="submit" onPress={formikProps.handleSubmit} color="green"/>
                    </View>
                )
            }
            </Formik>
        </View>
    )
}