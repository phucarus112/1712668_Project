import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, FlatList, Image} from 'react-native';

const ItemTopAuthors = (props) =>{
   return(
      <View style={styles.item}>
          <Image style={{ alignSelf: 'center', width: 100,height:100, borderRadius:50}} source={require('../../../assets/avt.png')} />
         <Text style={{alignSelf:'center', color: '#fff',fontSize:10, marginLeft:7, marginTop:5}}>{props.name}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        margin: 10,
    }
  });

  export default ItemTopAuthors;