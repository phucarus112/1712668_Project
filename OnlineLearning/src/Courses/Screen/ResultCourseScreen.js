import React, {useState, useEffect,useContext} from 'react'
import {BackHandler, Alert, StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, TouchableOpacity ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import { createStackNavigator } from '@react-navigation/stack';
import CourseIntroductionScreen from '../../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../../CourseDetail/Screen/LessonScreen'
import {ThemeContext} from '../../../App'
import {COURSES_LIST} from '../../Global/data-sampling'
import {vietnam} from '../../Global/strings'
import {API_COURSE_SEARCH} from '../../Global/APIClient'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const SearchAll = ({navigation}) =>{
  
  const renderItemAll = ({ item }) => (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("CourseIntroduction", {idCourse: item.id})}}>
    <ItemCourseVertical title={item.title} level ={item.level} name={item["instructor.user.name"]} totalHours = {item.totalHours}
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

  const {keyword} = route.params;
  const vietnamStrings = JSON.parse(vietnam);
  const [list,setList] = useState(null);
  const {theme} = useContext(ThemeContext);
  const [count,setcount] = useState(-1);

  function search() {
    if(list != null){

    }else{
    fetch(API_COURSE_SEARCH, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "keyword": keyword,
        "opt": {
          "sort": {
            "attribute": "price",
            "rule": "ASC"
          },
          "category": [
                "4eb0c150-8212-44ef-a90b-fcd40130ac01",
                "847dce36-f43b-4714-982d-e65812b40b5e",
                "eaa881b9-def6-429b-94e2-27b466862bc0",
                "a4015252-542a-4482-b087-4cfa85f2b953",
                "edbc17da-ef55-4e83-a028-ba9657600f0b",
                "93959023-5ff2-4bb8-beb2-c42dbe3dc2dd",
                "8d919542-d44d-444c-8623-4d9c4063ed82",
                "b8a345df-3b8e-4a4f-b592-6c6c2f230fdc"
          ],
          "time": [
            {
              "min": 0,
              "max": 1
            },
            {
              "min": 3,
              "max": 6
            }
          ],
          "price": [
            {
              "max": 0
            },
            {
              "min": 0,
              "max": 200000
            },
            {
              "min": 500000,
              "max": 1000000
            }
          ]
        },
        "limit": 1000,
        "offset": 1
      })
    })
      .then(response => response.json())
      .then(json => {
        setList(json.payload.rows);
        setcount(json.payload.count);
      })
      .catch((error) => console.error(error))
      .finally(() => {
      });
    }
  }

  search();

  useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
      };
    },[]);

    return (
      <NavigationContainer independent={true}>
      
         <View style={{...styles.abView}}>
         <TouchableOpacity style={{ alignSelf: 'center'}} onPress={()=>{
                        navigation.goBack();
                      }}>
                          <Image style={{ alignSelf: 'center', width: 20,height:20, tintColor: 'white', marginLeft: 10}} source={require('../../../assets/back.png')} />
                      </TouchableOpacity>
                      <Text style={{ alignSelf: 'center',textAlign: 'center', padding: 15, color: '#fff'}}>{count} {vietnamStrings.resultSearch}</Text>
                      <Text>          </Text>
        </View>
           
        <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12 , color: '#fff'},
        style: { backgroundColor: '#424949' }}}>
            <Tab.Screen name={vietnamStrings.All} component={SearchAllStack}/>
            <Tab.Screen name={vietnamStrings.Course} component={SearchCoursesStack} />
            <Tab.Screen name={vietnamStrings.Author} component={SearchAuthorsStack} />
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