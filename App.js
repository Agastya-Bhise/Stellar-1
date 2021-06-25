import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import createStackNavigator from '@react-navigation/stack';
import NavigationContainer from '@react-navigation/native'
import DailyPicScreen from './screens/DailyPic.js'
import SpaceCraftScreen from './screens/SpaceCrafts.js';
import StarMapScreen from './screens/StarMap.js';
import HomeScreen from './screens/HomeScreen.js';


export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown : false}}>
         <Stack.Screen name = {'Home'} component = {HomeScreen}/>
         <Stack.Screen name = {'SpaceCrafts'} component = {SpaceCraftScreen}/>
         <Stack.Screen name = {'StarMap'} component = {StarMapScreen}/>
         <Stack.Screen name = {'DailyPic'} component = {DailyPicScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
