import React from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
// import { WebView } from 'react-native-webview';

import YouTube from 'react-native-youtube';


const VideoPlayer = ({route})=>{
    const {videoId,title} = route.params
   return(
       <View style={{
           flex:1,
        }}>
           <View style={{
               width:"100%",
               height:200
           }}>
              {/* <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
              scalesPageToFit={true}
                             source={{uri:`https://www.youtube.com/embed/${videoId}`}}
              /> */}

                <YouTube
                videoId={videoId}
                apiKey="AIzaSyDQ6QgWz_Fojf8ec7-ZQpRRCUt-QuOyzZ4" // The YouTube video ID
                play // control playback of video with true/false
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
                />

           </View>
           <Text style={{
               fontSize:20,
               width:Dimensions.get("screen").width - 50,
               margin:9
           }}
           numberOfLines={2}
           ellipsizeMode="tail"
           >
             {title}
           </Text>
           <View
             style={{borderBottomWidth:1}}
           />
       </View>
   )
}

export default VideoPlayer