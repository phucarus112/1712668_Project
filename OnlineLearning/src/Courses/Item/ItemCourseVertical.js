import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemCourseVertical = (props) =>{
   
   return(
    <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
            <Image style={{ alignSelf: 'center', width: 90,height:80}} source={props.img} />
            <View style={styles.item2}>
                <Text style={{color: '#424949',fontSize:12, margin: 7, maxWidth: 200, fontWeight: 'bold'}}>{props.title}</Text>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>{props.author}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>{props.level}</Text>
                    <Text style={{color: '#424949',fontSize:10}}> - {props.totalHours} giờ</Text>
                </View>
                <Text style={{color: '#424949',fontSize:10, marginLeft:7}}>Bình luận: ({props.totalComments})</Text>
            </View>
        </View>
        <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginRight: 5}} source={require('../../../assets/option.png')} />
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