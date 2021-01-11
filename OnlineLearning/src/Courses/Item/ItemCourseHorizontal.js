import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { vietnam } from '../../Global/strings'

const ItemCourseHorizontal = (props) => {

    const vietnamStrings = JSON.parse(vietnam);

    return (
        <View style={styles.item}>
            <Image style={{ alignSelf: 'center', width: 210, height: 100 }} source={{ uri: props.imageUrl }} />

            <Text style={{ color: '#fff', fontSize: 12, margin: 7, fontWeight: 'bold' }}>{props.title}</Text>
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.author}: {props.instructor.user.name}</Text>
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.price}: {props.price}</Text>
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.updatedAt}: {props.updatedAt.slice(0, 10)}</Text>
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.totalHours}: {props.totalHours} {vietnamStrings.hour}</Text>
            {/* <View style={{flexDirection: 'row'}}> */}
            {/* <Text style={{color: '#fff',fontSize:10, marginLeft:7}}>Bình luận: ({props.totalComments})</Text> */}
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}> {vietnamStrings.rating}: ({props.ratedNumber})</Text>
            {/* </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: 210,
        height: 230,
        flexDirection: 'column',
        backgroundColor: '#424949',
        margin: 5,
    }
});

export default ItemCourseHorizontal;