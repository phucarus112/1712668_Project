import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemCourseVertical = (props) =>{
   
   return(
    <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
            <Image style={{ alignSelf: 'center', width: 110,height:80}} source={props.img} />
            <View style={styles.item2}>
                <Text style={{color: '#424949',fontSize:12, margin: 7, maxWidth: 200, fontWeight: 'bold'}}>{props.title}</Text>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>Tác giả: {props.author}</Text>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>Cấp độ: {props.level}</Text>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>Ngày đăng: {props.released}</Text>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>Tổng thời gian: {props.totalHours}</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>Bình luận: ({props.totalComments})</Text>
                <Text style={{color: '#424949',fontSize:10}}> - Đánh giá: ({props.rating})</Text>
                </View>
                
            </View>
        </View>
    
            <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: '#424949', marginRight: 5}} 
            source={(props.showOptipon === "show") ? require('../../../assets/option.png') : ''} />
    
        
       
    </View>
   )
}

const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',
        marginBottom: 5,
       padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#424949',
    },
    item2: {
       marginLeft: 15,
        flexDirection: 'column',
    }
  });

export default ItemCourseVertical;