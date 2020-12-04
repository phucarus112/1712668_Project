import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemLesson = (props) =>{
   return(
    <View style={styles.item}> 
        <View style={{width: 10, height: 10, borderRadius: 15, marginRight: 15, marginLeft: 15, marginTop: 15,backgroundColor: "#00ff00",}} />
        <Text style={{color: '#424949',fontSize:12, marginLeft:7,  marginTop: 8}}>{props.nameLesson}</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    item: {
        
        justifyContent: "flex-start",
        height: 50,
        flexDirection: 'row',
       borderTopWidth: 0.5,
       borderTopColor : "#424949",
        paddingTop: 8,
        paddingRight: 8,
    }
  });

export default  ItemLesson;