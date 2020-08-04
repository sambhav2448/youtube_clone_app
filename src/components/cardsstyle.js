import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native"

const globalStyles = StyleSheet.create({    

      image:{
        height:200,
        width:"100%"
    },
    container:{
        marginBottom:10,
        flex:1
      
    },
    logoright:{
        color:"#000"
    },
    lowercontainer:{
        flexDirection:"row",
        marginTop:5
    },
    iconuser:{
        margin:12
    },
    texthead:{
        fontWeight:"bold",
        fontSize:20,
        width:Dimensions.get("screen").width-100
    },
    textfoot:{
        fontSize:14,
        width:Dimensions.get("screen").width-100
    }

})

export default globalStyles