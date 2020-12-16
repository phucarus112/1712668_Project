import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemCourseHorizontal = (props) =>{
   
   return(
    <View style={styles.item}>
        <Image style={{ alignSelf: 'center', width: 210,height:100}} source={props.img} />
        
        <Text style={{color: '#fff',fontSize:12, margin: 7, fontWeight: 'bold'}}>{props.title}</Text>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Tác giả: {props.author}</Text>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Cấp độ: {props.level}</Text>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Ngày đăng: {props.released}</Text>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Tổng thời gian: {props.totalHours}</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Bình luận: ({props.totalComments})</Text>
        <Text style={{color: '#fff',fontSize:10}}> - Đánh giá: ({props.rating})</Text>
        </View>
       
    </View>
   )
}

const styles = StyleSheet.create({
    item: {
        width: 210,
        height:230,
        flexDirection: 'column',
         backgroundColor:'#424949',
        margin: 5,
    }
  });

export default ItemCourseHorizontal;