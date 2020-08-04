import React from "react"
import {View,Text,ScrollView,FlatList} from "react-native"
import Header from "../components/Header"
import Card from "../components/cards" 
import {useSelector} from "react-redux"

import Search from "./search"
const Home =()=>{
    const cardData=useSelector(state => state.cardData)

  return(
      <View style={{flex:1}}>
            <Header />
            <FlatList
                    data={cardData}
                    renderItem={({item})=>{
                    return <Card
                            videoid={item.id.videoId}
                            channel={item.snippet.channelTitle}
                            title={item.snippet.title}
                            />}}
                    keyExtractor={item => item.id.videoId}
                    />
      </View>
  )
}

export default Home;