import React, {useState, useEffect,useContext} from 'react'
import {BackHandler, StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, TouchableOpacity ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import { createStackNavigator } from '@react-navigation/stack';
import CourseIntroductionScreen from '../../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../../CourseDetail/Screen/LessonScreen'
import {ThemeContext} from '../../../App'
import {COURSES_LIST} from '../../Global/data-sampling'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const SearchAll = ({navigation}) =>{
  
  const renderItemAll = ({ item }) => (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
                </TouchableOpacity>
    );
    const {theme} = useContext(ThemeContext);
          return(
            <SafeAreaView style={{...styles.container, backgroundColor: theme.background}} >
           
            <View style={{...styles.container, backgroundColor: theme.background}}>
                  <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                      <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>{COURSES_LIST.length} kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList style={{marginBottom: 80}} data={COURSES_LIST} renderItem={renderItemAll} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
           
           </SafeAreaView>
          )
}
        
const SearchCourses = ({navigation}) =>{
  const renderItemCourses = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
                </TouchableOpacity>
    );
    const {theme} = useContext(ThemeContext);
          return(
            <SafeAreaView style={{...styles.container, backgroundColor: theme.background}} >
           
            <View style={{...styles.container, backgroundColor: theme.background}}>
                  <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                      <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>{COURSES_LIST.length} kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList style={{marginBottom: 80}} data={COURSES_LIST} renderItem={renderItemCourses} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
          
           </SafeAreaView>
          )
        }
        
const  SearchPaths = ({navigation}) =>{
  const renderItemPaths = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
                </TouchableOpacity>
    );
    const {theme} = useContext(ThemeContext);
            return(
              <SafeAreaView style={{...styles.container, backgroundColor: theme.background}} >
           
              <View style={{...styles.container, backgroundColor: theme.background}}>
                    <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                        <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                            <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>{COURSES_LIST.length} kết quả</Text>
                        </View>
                        <SafeAreaView>
                          <FlatList style={{marginBottom: 80}} data={COURSES_LIST} renderItem={renderItemPaths} keyExtractor={item => item.id}/>
                          </SafeAreaView>
                   </View>
                   </View>
            
             </SafeAreaView>
            )
        }
        
const SearchAuthors = ({navigation}) =>{
  const renderItemAuthors = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
    <ItemCourseVertical title={item.title} level ={item.level} author={item.author} totalHours = {item.totalHours}
                totalComments = {item.totalComments} img={item.img} />
                </TouchableOpacity>
    );
    const {theme} = useContext(ThemeContext);
          return(
            <SafeAreaView style={{...styles.container, backgroundColor: theme.background}} >
           
              <View style={{...styles.container, backgroundColor: theme.background}}>
                    <View style={{...styles.containerBody, backgroundColor: theme.background}}>
                      <View style={{flexDirection: 'row', justifyContent:'flex-end', padding:5}}>
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>{COURSES_LIST.length} kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={COURSES_LIST}  style={{marginBottom: 80}}
                        renderItem={renderItemAuthors} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
           
           </SafeAreaView>
          )
        }

const SearchAllStack = ({navigation}) =>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="All" component={SearchAll}options={{headerShown: false }}/>
    <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false, }}/>
        <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
</Stack.Navigator>
  )
}

const SearchCoursesStack = ({navigation}) =>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="Courses" component={SearchCourses} options={{headerShown: false }}/>
</Stack.Navigator>
   
  )
}

const SearchPathsStack = ({navigation}) =>{
  return(
    <Stack.Navigator>
        <Stack.Screen name="Paths" component={SearchPaths} options={{headerShown: false }}/>
       
    </Stack.Navigator>
  )
}

const SearchAuthorsStack = ({navigation}) =>{
  return(
    <Stack.Navigator>
        <Stack.Screen name="Authors" component={SearchAuthors} options={{headerShown: false}}/>
        <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false, }}/>
        <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const ResultCourseScreen = ({route, navigation}) =>{
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

    const {theme} = useContext(ThemeContext);
    const {keyword} = route.params;
    
    return (
      <NavigationContainer independent={true}>
      
         <View style={{...styles.abView}}>
         <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                        navigation.goBack();
                      }}>
                          <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../../assets/back.png')} />
                      </TouchableOpacity>
                      <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>10 kết quả tìm kiếm</Text>
                      <Text>          </Text>
        </View>
           
        <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12 , color: '#fff'},
        style: { backgroundColor: '#424949' }}}>
            <Tab.Screen name="All" component={SearchAllStack}/>
            <Tab.Screen name="Courses" component={SearchCoursesStack} />
            <Tab.Screen name="Paths" component={SearchPathsStack} />
            <Tab.Screen name="Authors" component={SearchAuthorsStack} />
      </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  abView:{
  
  },
  container2:{
     flexDirection: "row",
    flex: 8,
    alignSelf: "stretch",
     padding: 15,
     
     borderRadius:10,
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
    flexDirection: 'row',
    justifyContent:'space-between',
        alignSelf: "stretch",
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:'#424949',
    height: 70,

  },
  textLabel:{
    marginTop:15, marginLeft: 15,
      color: '#fff',
  },
});

export default ResultCourseScreen;