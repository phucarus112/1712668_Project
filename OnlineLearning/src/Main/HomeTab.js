import React, {useState,useContext} from 'react'
import {StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ItemTopAuthors from '../Courses/Item/ItemTopAuthors'
import ItemCourseHorizontal from '../Courses/Item/ItemCourseHorizontal'

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from '../../App'
import {AuthenticationContext} from '../Provider/authentication-provider'

import {NEW_COURSES, TRENDING_COURSES, AUTHORS} from '../Global/data-sampling'

const Stack = createStackNavigator();

const HomeTab = ({navigation}) =>{
  const renderItemNew = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
        <ItemCourseHorizontal title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} released={item.released} rating={item.rating} />
    </TouchableOpacity>  
  );
  
  const renderItemTrending = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction",{idCourse: item.id})}}>
        <ItemCourseHorizontal title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} released={item.released} rating={item.rating}/>
    </TouchableOpacity>
  );

  const renderItemAuthor = ({item}) =>(
    <ItemTopAuthors name ={item.name}/>
  );

  const {theme} = useContext(ThemeContext);
  const {authentication} = useContext(AuthenticationContext);
// const recommendedCourses = coursesData.slice(12, 23);
  return(
          <NavigationContainer independent={true}>
          <SafeAreaView>
    <ScrollView>
    <View style={{...styles.container, backgroundColor: theme.background}}>
          <View style={styles.abView} >
            <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>Online Learning</Text>
          </View>
          <View style={{...styles.containerBody, backgroundColor: theme.background}}>
            <View >
                <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5}}>
                    <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949',}}>Mới nhất</Text>
                    <View onStartShouldSetResponder={()=>{
                      navigation.navigate("NewCourse")
                    }} style={{flexDirection: 'row', marginTop:13,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                        <Text style={{color: '#fff', marginRight:3, fontSize:10}} onPress={()=>{
                           navigation.navigate("NewCourse")
                        }}>Xem tất cả</Text>
                        <TouchableOpacity onPress={()=>{
                           navigation.navigate("NewCourse")
                        }}>
                            <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: '#fff'}} source={require('../../assets/arrow.png')} />
                        </TouchableOpacity>
                       
                    </View>
                </View>
                <SafeAreaView>
                  <FlatList horizontal= {true}
                    data={NEW_COURSES.slice(0,3)}
                    renderItem={renderItemNew}
                    keyExtractor={item => item.id}/>
                </SafeAreaView>
                <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5}}>
                    <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949',}}>Xu hướng</Text>
                    <View onStartShouldSetResponder={()=>{
                      navigation.navigate("TrendingCourse")
                    }} style={{flexDirection: 'row', marginTop:13,backgroundColor:"#424949", padding:10 ,borderRadius:30}}>
                        <Text onPress={()=>{
                           navigation.navigate("TrendingCourse")
                        }} style={{color: '#fff', marginRight:3, fontSize:10}}>Xem tất cả</Text>
                         <TouchableOpacity onPress={()=>{
                           navigation.navigate("TrendingCourse")
                        }}>
                        <Image style={{ marginLeft:3, marginRight:3,width: 15,height:15, tintColor: '#fff'}} source={require('../../assets/arrow.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <SafeAreaView>
                  <FlatList horizontal= {true}
                    data={TRENDING_COURSES.slice(0,3)}
                    renderItem={renderItemTrending}
                    keyExtractor={item => item.id}/>
                </SafeAreaView>
                <View style={{flexDirection: 'row', justifyContent:'space-between', padding:5}}>
                    <Text style={{ marginLeft: 10, marginTop: 20, color: '#424949',}}>Tác giả</Text>
                </View>
                <SafeAreaView>
                  <FlatList horizontal= {true}
                    data={AUTHORS}
                    renderItem={renderItemAuthor}
                     keyExtractor={item => item.id}/>
                </SafeAreaView>
            </View>  
          </View>
    </View>
    </ScrollView>
    </SafeAreaView>
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
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
  containerBody: {
      alignSelf: "stretch",
  },
  abView:{
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

export default HomeTab;