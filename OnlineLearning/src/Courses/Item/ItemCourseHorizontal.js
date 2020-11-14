import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemCourseHorizontal = (props) =>{
   
   return(
    <View style={styles.item}>
        <Image style={{ alignSelf: 'center', width: 210,height:85}} source={props.img} />
        
        <Text style={{color: '#fff',fontSize:12, margin: 7}}>{props.title}</Text>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>{props.author}</Text>
        <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>{props.level}</Text>
            <Text style={{color: '#fff',fontSize:10}}> - {props.totalHours} giờ</Text>
        </View>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Bình luận: ({props.totalComments})</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    item: {
        width: 210,
        height:200,
        flexDirection: 'column',
         backgroundColor:'#424949',
        margin: 5,
    }
  });

export default ItemCourseHorizontal;