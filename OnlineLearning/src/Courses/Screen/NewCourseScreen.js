import React, {useState} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList} from 'react-native'
import ItemCourseVertical from '../Item/ItemCourseVertical'

const NewCourseScreen = (props) =>{

  const renderItemNew = ({ item }) => (
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
    );

    return (
    <SafeAreaView style={styles.container} >
    <ScrollView style={{backgroundColor:"#000"}}>
      <View style={styles.container}>
          <View style={styles.abView} >
                    <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../../assets/back.png')} />
                    <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Mới nhất</Text>
                    <Text>          </Text>
          </View>
          <View style={styles.containerBody}>
               
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
    img: require('../../../assets/img1.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'How to build app with Flutter',
    author: "James Weigh",
    level: "Average",
    totalHours: 3,
    totalComments: 99,
    img: require('../../../assets/img2.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Build application with NodeJS (Advanced)',
    author: "Liah Yoo",
    level: "Advanced",
    totalHours: 2,
    totalComments: 10,
    img: require('../../../assets/img3.jpg')
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
    justifyContent:'space-between',
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

export default NewCourseScreen;