import React from "react"
import {View,Text,StyleSheet} from "react-native"

import Home from "../screens/Home"
import Explore from "../screens/explore"
import Subscribe from "../screens/subscribe"
import { useTheme } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons"



const Tab = createBottomTabNavigator();

function TabNav() {
    const {colors} = useTheme();

  return (

      <Tab.Navigator
      
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = 'home'
            } else if (route.name === 'Explore') {
                iconName = 'compass';
            }else if (route.name === 'Subscribe') {
                iconName= 'youtube-subscription' ;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: colors.tabIcon,
            inactiveTintColor: 'gray',
        }}

      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Subscribe" component={Subscribe} />
      </Tab.Navigator>
  );
}

export default TabNav


  