import React from "react"
import {View,Text,StyleSheet,Linking} from "react-native"
import {useTheme } from '@react-navigation/native';
import Header from "../components/Header"
import Icon from "react-native-vector-icons/AntDesign"



const Subscribe=()=>{

    const {colors}=useTheme()

  return(
      <View >
        <Header/>
        <View style={styles.container}>
            <Text style={{...styles.text1,...{color:colors.userColor}}}>Click below to follow me on github</Text>
            <Text style={{...styles.TextStyle,...{color:colors.userColor}}} onPress={ ()=> Linking.openURL('https://github.com/sambhav2448') } >
                Sambhav2448
            </Text>
            <Icon name={'github'} style={{...styles.logo,...{color:colors.userColor}}} size={40} onPress={()=>navigation.goBack()} /> 
        </View>
      </View>
  )
}

export default Subscribe;


const styles = StyleSheet.create({    

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        top:250        
    },
    text1:{
        fontSize:24.

    },
    TextStyle:{
        fontSize:28,
        marginTop:12,
        textDecorationLine:"underline"
    },
    logo:{
        marginTop:16
    }
  
  })
  