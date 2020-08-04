import React , {useState} from "react"
import {View,Text,StyleSheet,TextInput,FlatList,ActivityIndicator} from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Ionicons"
import {useSelector,useDispatch} from "react-redux"
import Minicard from "../components/minicard"
import { useTheme } from '@react-navigation/native';
import { color } from "react-native-reanimated"


//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDQ6QgWz_Fojf8ec7-ZQpRRCUt-QuOyzZ4


const Search =({navigation})=>{
const [val,setVal]=useState("")
// const [minidata,setMinidata]=useState([])

const dispatch = useDispatch()
const minidata=useSelector(state => state.cardData)

const [loader,setLoader]=useState(false)

    const handlechange=(text)=>{
        setVal(text)
        // console.log(text)
    }

    const handlesubmit=()=>{
        
        setLoader(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${val}&type=video&key=<APIKEY>`)
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:"addVid",data:data.items})
            setLoader(false)
        })    
}

const {colors}=useTheme();

  return(
      <View style={{flex:1}}>
                <View style={{
                    backgroundColor:colors.headerColor,
                    flexDirection:"row",
                    justifyContent:"space-around",
                    alignItems:"center",
                    padding:6
                    
                }}> 
                
                <Icon name={'arrowleft'} style={{...styles.logo,...{color:colors.iconColor}}} size={32} onPress={()=>navigation.goBack()} />                

                    <TextInput
                    style={styles.input}
                    value={val}
                    onChangeText={(text)=>handlechange(text)}
                    />
                
                <Icon2 name={'ios-search'} style={{...styles.logo,...{color:colors.iconColor}}} size={32} onPress={handlesubmit}/>                

                 </View>

              {loader ?  <ActivityIndicator size="large" color="red"/>:null}

                 <FlatList
                    data={minidata}
                    renderItem={({item})=>{
                    return <Minicard
                            videoid={item.id.videoId}
                            channel={item.snippet.channelTitle}
                            title={item.snippet.title}
                            />}}
                    keyExtractor={item => item.id.videoId}
                    />

      </View>
      
  )
}

export default Search;



const styles = StyleSheet.create({    


  container:{
    //   backgroundColor:colors.headerColor,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      padding:6,
      
  },
  input:{
      width:"70%",
      backgroundColor:"#e6e6e6",
      paddingLeft:12
  },
  logo:{
        color:"black"
  },
  logo2:{
      marginRight:4
  }

})

