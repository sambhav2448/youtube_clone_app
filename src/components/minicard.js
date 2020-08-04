import React from "react"
import {View,Text, Image,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import { useNavigation,useTheme } from '@react-navigation/native';



const Minicard =(props)=>{
    const navigation = useNavigation();
    const {colors}=useTheme()
  return(
    <TouchableOpacity
    onPress={()=>navigation.navigate("Video Player",{videoId:props.videoid,title:props.title})}
    >
      <View style={styles.container}>
          <Image
                style={styles.image}
                source={{uri: `https://i.ytimg.com/vi/${props.videoid}/hqdefault.jpg`}}
            />

            <View style={styles.content}>
                <View>
                    <Text
                     ellipsizeMode="tail"
                     numberOfLines={3}
                    style={{...styles.text1,...{color:colors.userColor}}}>
                        {props.title}
                    </Text>
                
                    <Text
                     ellipsizeMode="tail"
                     numberOfLines={1}
                    style={{...styles.text2,...{color:colors.userColor}}}>{props.channel}</Text>
                </View>
            </View>
      </View>
      </TouchableOpacity>
  )
}

export default Minicard;


const styles = StyleSheet.create({    

    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        marginBottom:4
    },
    image:{
        width:"40%",
        height:100
    },
    text1:{
        fontSize:18,
        width:Dimensions.get("screen").width/1.85
    },
    text2:{
        marginTop:1,
        fontSize:13,
        color:"#0a0a0a"
    },
    content:{
        padding:6
    }
  
  })
  