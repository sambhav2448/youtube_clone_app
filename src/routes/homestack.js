
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoPlayer from "../screens/videoplayer"
import Home from "../routes/tabNavigator";
import SearchPage from "../screens/search"

import reducer from "../reducer/reducer"
import themeReducer from "../reducer/themeReducer"
import {Provider,useSelector} from "react-redux"
import {createStore,combineReducers} from "redux"


const NewDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      headerColor: '#212121',
      iconColor:"white",
      tabIcon:"white",
      userColor:"#e3e3e3"
    },
  };

const NewDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      headerColor: 'rgb(255,255,255)',
      tabIcon:"red",
      iconColor:"black",
      userColor:"black"
    },
  };

const rootReducer=combineReducers({
  themeData:themeReducer, //false
  cardData:reducer //[]
})

const store = createStore(rootReducer);
const Stack = createStackNavigator();

export default ()=>{
  return(
  <Provider store={store}>
   <Homestack/>
  </Provider>
  )
}

export function Homestack() {
  let ThemeData=useSelector(state => state.themeData)

  return (
    <Provider store={store}>
        <NavigationContainer theme={ThemeData ? NewDarkTheme : NewDefaultTheme}>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search Page" component={SearchPage} />
                <Stack.Screen name="Video Player" component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
    
  );
}

// export default Homestack;