import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';

const ItemTopAuthorsVertical = (props) => {
    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                
                    <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: props.avatar }} />
                    <Text style={{ color: '#424949', fontSize: 10, marginLeft: 7, marginTop: 5 }}>{props.name}</Text>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        justifyContent: 'flex-start',
        marginBottom: 5,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#424949',
    },
   
});

export default ItemTopAuthorsVertical;