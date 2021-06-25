import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SpaceCraftScreen extends React.Component{
     render(){
         return (
           <View style = {{flex : 1, alignItems : "center", justifyContent : "center"}}>
               <Text>Space Crafts Screen</Text>
           </View>
         );
     }
}