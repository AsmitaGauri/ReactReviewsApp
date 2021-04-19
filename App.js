
import React,{useState} from 'react';

import Home from './screens/home';
import {StyleSheet} from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import Navigator from './routes/drawer'
const getFonts=()=>{
    return Font.loadAsync({
        'raleway-variable':require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
        'raleway-italic-variable':require('./assets/fonts/Raleway-Italic-VariableFont_wght.ttf')
    });
}

// since this function loads asynchrously below code might execute before the font is fetched
// hence we need to make sure that we render home only when fonts are fetched

export default function App() {

  const [fontsLoaded, setfontsLoaded] = useState(false);
    
    if(fontsLoaded){
        return(
           
                <Navigator/>
        
        );
    }else{
        return(
            <AppLoading
             startAsync={getFonts}
             onFinish={()=>setfontsLoaded(true)}
             onError={console.error}
            />
        );
    }
}

const styles=StyleSheet.create({
  container:{
      padding:24
  }
})