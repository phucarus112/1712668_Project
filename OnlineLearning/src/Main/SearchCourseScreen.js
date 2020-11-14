import React, {useState, useEffect} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, Dimensions ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCourseVertical from '../Courses/Item/ItemCourseVertical'
import { SearchBar } from 'react-native-search-bar';

const Tab = createMaterialTopTabNavigator();

const renderItemAll = ({ item }) => (
  <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
              totalComments = {item.totalComments} img={item.img} />
  );

const renderItemCourses = ({ item }) => (
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
    );

const renderItemPaths = ({ item }) => (
      <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                  totalComments = {item.totalComments} img={item.img} />
      );

const renderItemAuthors = ({ item }) => (
        <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                    totalComments = {item.totalComments} img={item.img} />
        );

function SearchAll(){
          return(
            <SafeAreaView style={styles.container} >
            <ScrollView>
            <View style={styles.container}>
                  <View style={styles.containerBody}>
                      <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>3 kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={DATA} renderItem={renderItemAll} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
           </ScrollView>
           </SafeAreaView>
          )
}
        
function SearchCourses(){
          return(
            <SafeAreaView style={styles.container} >
            <ScrollView>
            <View style={styles.container}>
                  <View style={styles.containerBody}>
                      <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>4 kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={DATA} renderItem={renderItemAll} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
           </ScrollView>
           </SafeAreaView>
          )
        }
        
function SearchPaths(){
            return(
              <SafeAreaView style={styles.container} >
              <ScrollView>
              <View style={styles.container}>
                    <View style={styles.containerBody}>
                        <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                            <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>10 kết quả</Text>
                        </View>
                        <SafeAreaView>
                          <FlatList data={DATA} renderItem={renderItemAll} keyExtractor={item => item.id}/>
                          </SafeAreaView>
                   </View>
                   </View>
             </ScrollView>
             </SafeAreaView>
            )
        }
        
function SearchAuthors(){
          return(
            <SafeAreaView style={styles.container} >
            <ScrollView>
            <View style={styles.container}>
                  <View style={styles.containerBody}>
                      <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>101 kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={DATA} renderItem={renderItemAll} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
           </ScrollView>
           </SafeAreaView>
          )
        }

const SearchCourseScreen = (props) =>{
    return (
    <NavigationContainer independent={true} >
       <View style={styles.abView}>
   
          <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Cancel</Text>
          
        </View>
        <Tab.Navigator tabBarOptions={{
                        labelStyle: { fontSize: 12 , color: '#fff'},
                        style: { backgroundColor: '#000' },
           }}>
            <Tab.Screen name="All" component={SearchAll}/>
            <Tab.Screen name="Courses" component={SearchCourses} />
            <Tab.Screen name="Paths" component={SearchPaths} />
            <Tab.Screen name="Authors" component={SearchAuthors} />
      </Tab.Navigator>
    </NavigationContainer>
    
    )
}

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


export default SearchCourseScreen ;