import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, VirtualizedList} from 'react-native'
import ItemCourseVertical from '../Courses/Item/ItemCourseVertical'

const DownloadScreen = (props) =>{

  const renderItemNew = ({ item }) => (
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
    );

    return (
     <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
          <View style={styles.abView} >
                    
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Tải xuống</Text>
                  
          </View>
          <View style={styles.containerBody}>
          <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                 
                        <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>Xoá tất cả</Text>
                   
                </View>
                <SafeAreaView>
                  <FlatList 
                    data={DATA}
                    renderItem={renderItemNew}
                    keyExtractor={item => item.id}/>
                </SafeAreaView>
          </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    )
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Basic React Native',
    author: "Hyram",
    level: "Intermediate",
    totalHours: 5,
    totalComments: 213,
    img: require('../../assets/img1.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'How to build app with Flutter',
    author: "James Weigh",
    level: "Average",
    totalHours: 3,
    totalComments: 99,
    img: require('../../assets/img2.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Build application with NodeJS (Advanced)',
    author: "Liah Yoo",
    level: "Advanced",
    totalHours: 2,
    totalComments: 10,
    img: require('../../assets/img3.jpg')
  },
];

const styles = StyleSheet.create({
  container2:{
    alignSelf: "stretch",
     padding: 10,
     backgroundColor:'#424949',
     borderRadius:10,
     borderWidth: 1,
     borderColor: '#c9c9c9',
   },
  container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
  containerBody: {
      alignSelf: "stretch",
  },
  abView:{
    flexDirection: 'row',
    justifyContent:'center',
        alignSelf: "stretch",
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:'#424949',
  },
  textLabel:{
    marginTop:15, marginLeft: 15,
      color: '#fff',
  },
});

export default DownloadScreen ;