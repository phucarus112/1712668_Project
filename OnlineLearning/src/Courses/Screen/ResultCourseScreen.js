import React, {useState, useEffect,useContext} from 'react'
import {BackHandler, StyleSheet, View,Text, Button, Image, TextInput, SafeAreaView, TouchableOpacity ,ScrollView, FlatList, VirtualizedList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCourseVertical from '../Item/ItemCourseVertical'
import { createStackNavigator } from '@react-navigation/stack';
import CourseIntroductionScreen from '../../CourseDetail/Screen/CourseIntroductionScreen'
import LessonScreen from '../../CourseDetail/Screen/LessonScreen'
import {ThemeContext} from '../../../App'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const SearchAll = ({navigation}) =>{
  
  const renderItemAll = ({ item }) => (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("CourseIntroduction")}}>
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
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>3 kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={DATA} renderItem={renderItemAll} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
           
           </SafeAreaView>
          )
}
        
const SearchCourses = ({navigation}) =>{
  const renderItemCourses = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction")}}>
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
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>4 kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={DATA} renderItem={renderItemCourses} keyExtractor={item => item.id}/>
                        </SafeAreaView>
                 </View>
                 </View>
          
           </SafeAreaView>
          )
        }
        
const  SearchPaths = ({navigation}) =>{
  const renderItemPaths = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction")}}>
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
                            <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>10 kết quả</Text>
                        </View>
                        <SafeAreaView>
                          <FlatList data={DATA} renderItem={renderItemPaths} keyExtractor={item => item.id}/>
                          </SafeAreaView>
                   </View>
                   </View>
            
             </SafeAreaView>
            )
        }
        
const SearchAuthors = ({navigation}) =>{
  const renderItemAuthors = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("CourseIntroduction")}}>
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
                          <Text style={{color: '#42c5f5',marginTop:13, marginRight:3, fontSize:12}}>101 kết quả</Text>
                      </View>
                      <SafeAreaView>
                        <FlatList data={DATA} renderItem={renderItemAuthors} keyExtractor={item => item.id}/>
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
  
</Stack.Navigator>
  )
}

const SearchCoursesStack = ({navigation}) =>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="Courses" component={SearchCourses} options={{headerShown: false }}/>
    <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
</Stack.Navigator>
   
  )
}

const SearchPathsStack = ({navigation}) =>{
  return(
    <Stack.Navigator>
        <Stack.Screen name="Paths" component={SearchPaths} options={{headerShown: false }}/>
        <Stack.Screen name="CourseIntroduction" component={CourseIntroductionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Lesson" component={LessonScreen} options={{headerShown: false}}/>
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
      
         <View style={{...styles.abView, backgroundColor: theme.background}}>
            <View style={styles.container2}>
                <Image style={{ marginTop: -5, width: 15,height:20, padding: 13, tintColor: '#fff'}} source={require('../../../assets/loupe.png')} />
                <TextInput placeholder="Search here" style={{color:"#fff" ,flex: 8, marginLeft: 10, marginRight: 10,}} defaultValue={keyword}></TextInput>
               
            </View>
            <Text style={{ alignSelf: 'center',textAlign: 'center', paddingBottom: 15, paddingRight: 15, paddingTop: 15, paddingLeft: 8, color: '#42c5f5', flex: 2, fontSize: 13}}
              onPress={()=>{
                navigation.goBack()
              }}>Cancel</Text>
        </View>
        <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12 , color: '#fff'},
        style: { backgroundColor: '#424949' }}}>
            <Tab.Screen name="All" component={SearchAllStack}/>
            <Tab.Screen name="Courses" component={SearchCourses} />
            <Tab.Screen name="Paths" component={SearchPaths} />
            <Tab.Screen name="Authors" component={SearchAuthors} />
      </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container2:{
     flexDirection: "row",
    flex: 8,
    alignSelf: "stretch",
     padding: 15,
     backgroundColor:'#424949',
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
    height: 70,
    flexDirection: 'row',
    justifyContent:'center',
        alignSelf: "stretch",
        marginTop: 15,
        paddingLeft: 10,
        paddingTop:10,
        paddingBottom:10,
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


export default ResultCourseScreen;