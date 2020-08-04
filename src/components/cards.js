import React from "react"
import {View,Text,Image,TouchableOpacity} from "react-native"
import styles from "./cardsstyle"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation , useTheme} from '@react-navigation/native';




const Card =(props)=>{
    const navigation = useNavigation();
    const {colors}= useTheme()

  return(

    <TouchableOpacity
      onPress={()=>navigation.navigate("Video Player",{videoId:props.videoid,title:props.title})}
      >
    <View style={styles.container}>

    
            <Image
                style={styles.image}
                source={{uri: `https://i.ytimg.com/vi/${props.videoid}/hqdefault.jpg`}}
            />
           

            <View style={styles.lowercontainer}>
                <View style={styles.iconuser}> 
                    <FontAwesome5 name={'user-circle'} style={{...styles.logoright,...{color:colors.userColor}}} size={32} solid />                
                </View>

                <View style={{marginLeft:8}} >
                    <Text 
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    style={{...styles.texthead,...{color:colors.iconColor}}}>{props.title}</Text>
                    <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{...styles.textfoot,...{color:colors.userColor}}}>{props.channel}</Text>
                </View>
            </View>       
    
    </View>
    </TouchableOpacity>
  )
}

export default Card;