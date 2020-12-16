import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemLesson = (props) =>{
   return(
    <View style={styles.item}> 
            <Image style={{ alignSelf: 'center', width: 110,height:80}} source={props.thumbnail} />
            <View style={{marginLeft:7,  marginTop: 8,marginRight: 15}}>
                <Text style={{color: '#424949',fontSize:12, marginLeft:7,  marginTop: 8,marginRight: 15, maxWidth: 220}}>{props.title}</Text>
                <Text style={{color: '#424949',fontSize:12, marginLeft:7,  marginTop: 8,marginRight: 15}}>{props.duration}</Text>
            </View>
    </View>
   )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        justifyContent: "flex-start",
        height: 130,
        flexDirection: 'row',
       borderTopWidth: 0.5,
       borderTopColor : "#424949",
        
    }
  });

export default  ItemLesson;