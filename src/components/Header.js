import React from "react"
import {View,Text} from "react-native"
import styles from "./globalComp"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation,useTheme } from '@react-navigation/native';
import {useSelector,useDispatch} from "react-redux"



const Header =()=>{
  const navigation = useNavigation();
  const {colors} = useTheme();


  const dispatch = useDispatch()
  const theme=useSelector(state => state.themeData)



  return( 
      <View style={{
        backgroundColor:colors.headerColor,
        height:48,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        elevation:4,
        marginBottom:4
        
      }}>
          <View style={styles.leftcontainer}>
            <AntDesign name={'youtube'} style={styles.logo} size={32} />                
            <Text style={{...styles.text,...{color:colors.iconColor}}}>YouTube</Text>
          </View>

          <View style={styles.rightcontainer}>
            <Foundation name={'video'} style={{...styles.logoright,...{color:colors.iconColor}}} size={32} />                
            <Feather name={'search'} style={{...styles.logoright,...{color:colors.iconColor}}} size={32} onPress={()=>navigation.navigate('Search Page')}/>                
            <FontAwesome5 name={'user-circle'} style={{...styles.logoright,...{color:colors.iconColor}}} size={32} solid 
              onPress={()=>dispatch({type:"changeTheme",data:!theme})
            }
            />                

          </View>
      </View>
  )
}

export default Header;