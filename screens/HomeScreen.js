import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component{
     render(){
         return (
           <View style = {{flex : 1, alignItems : "center", justifyContent : "center"}}>
               <Text>Home Screen!</Text>
           </View>
         );
     }
}