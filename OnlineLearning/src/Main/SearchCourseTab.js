import React, {useState, useEffect} from 'react'
import {BackHandler, StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, TouchableOpacity ,ScrollView, FlatList, VirtualizedList} from 'react-native'

const SearchCourseTab= ({navigation}) =>{

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
      };
  },[]);
    
  return (
      <View style={styles.container}>
        <View style={styles.abView}>
          <View style={styles.container2}>
                <Image style={{ marginTop: -5, width: 15,height:20, padding: 13, tintColor: '#fff'}} source={require('../../assets/loupe.png')} />
                <TextInput placeholder="Search here" style={{color:"#fff" ,flex: 8, marginLeft: 10, marginRight: 10,}}></TextInput>
          </View>
          <View style={styles.container3} onStartShouldSetResponder={()=>{
              navigation.navigate("ResultCourse")}} >
              <Text style={{color: "#fff", alignSelf: "center"}} onPress={()=>{
                navigation.navigate("ResultCourse")}} >Search</Text>
          </View>
        </View>
        <View style={styles.noDataContainer}>
          <Text style={{color: "#c9c9c9", maxWidth: 250, fontSize:13}}>Over 7.000 courses at your fingertips. </Text>
          <Text style={{color: "#c9c9c9", maxWidth: 300}}>Search by title, path, author or subject. </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  noDataContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#000"
  },
  container2:{
    flexDirection: "row",
    flex: 8,
    alignSelf: "stretch",
    padding: 15,
    backgroundColor:'#424949',
    borderRadius:10,
   },
  container3:{
    backgroundColor: '#42c5f5',
    alignSelf: "stretch",
    marginLeft:5,
    marginRight:5,
    borderRadius: 20,
     padding: 15,
   },
  container:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
  },
  containerBody:{
      alignSelf: "stretch",
  },
  abView:{
        height: 70,
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf: "stretch",
        marginTop: 15,
        paddingLeft: 10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#000',
  },
  textLabel:{
    marginTop:15, 
    marginLeft: 15,
    color: '#fff',
  }
});

const AUTHORS = [
  {
    id: '001',
    name: "Hyram"
  },
  {
    id: '002',
    name: "James Weigh"
  },
  {
    id: '003',
    name: "Liah Yoo"
  },
  {
    id: '004',
    name: "Lyn"
  }
];

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


export default SearchCourseTab;