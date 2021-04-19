import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';

const ReviewSchema=yup.object({
    title : yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating:yup.string().required().test('rat-1-5','Rating should be btw 1-5',(val)=>{
        return parseInt(val)<6&&parseInt(val)>0;
    })
})

export default function ReviewForm({addReview}) {
    return(
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={ReviewSchema}
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
                         onBlur={formikProps.handleBlur('title')}
                        />
                        {/* if one feild fails all other errors will be shown */}
                        {/* Hence we need to keep formikProps.touched.title */}
                        <Text style={globalStyles.error}>{formikProps.touched.title&&formikProps.errors.title}</Text>

                        <TextInput
                         style={globalStyles.input}
                         placeholder="Review body"
                         onChangeText={formikProps.handleChange('body')}
                         value={formikProps.values.body}
                         onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.error}>{formikProps.touched.body&&formikProps.errors.body}</Text>

                        <TextInput
                         style={globalStyles.input}
                         placeholder="Rating (1-5)"
                         onChangeText={formikProps.handleChange('rating')}
                         value={formikProps.values.rating}
                         keyboardType="numeric"
                         onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.error}>{formikProps.touched.rating&&formikProps.errors.rating}</Text>
                        <Button title="submit" onPress={formikProps.handleSubmit} color="green"/>
                    </View>
                )
            }
            </Formik>
        </View>
    )
}